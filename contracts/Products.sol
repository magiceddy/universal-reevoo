pragma solidity^0.4.7;

/// @title List of product
/// @author Rinaldo Rossi <rinaldo.rossi.web@gmail.com>

contract Products {

    /* emit when product is added */
    event productAdded(
        string name
    );

    /* emit when product is updated */
    event productUpdated(
        uint indexed code,
        string indexed name
    );

    struct Product {
        string name;
        bool created;
    }

    mapping (uint => Product) productsList;

    /// @dev check if product whas already registered
    /// @param _code - product code
    modifier productAlreadyCreated(uint _code) {
        if(productsList[_code].created) 
            throw;
        _;
    }

    /// @dev check if product was not created
    /// @param _code product code
    modifier productNotCreated(uint _code) {
        if(!productsList[_code].created) 
            throw;
        _;
    }

    /// check if product code is valide
    /// @param _code - product code
    modifier valideCode(uint _code) {
        if(_code <= 0) throw;
        _;
    }

    function Products () {}

    /* @dev add product for specific company
     * @param _code - product code
     * @param _name - product name 
     */
    function addProduct(uint _code, string _name) 
        valideCode(_code) 
        productAlreadyCreated(_code) 
    {
        productsList[_code] = Product(
            {
                name: _name, 
                created: true
            }
        );
        productAdded(_name);
    }
}