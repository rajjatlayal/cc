// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Primcoin is ERC20, Ownable {

   uint256 constant public MAX_SUPPLY = 20000_000_000e18;
    address public deployer;
    uint private reserved_spl = 2000000000;     //10% strong incentive to help others
    uint private admin_others = 200000000;      //1% admin & expenses of prim rewards program
    uint private charity = 400000000;           //2% to charity
    uint private reserved_all = 1000000000;     //5% to users of prim proportionately
    uint private liquidity = 400000000;         //2% liquidity pool


    constructor()
    ERC20("Primcoin", "PMC")
    { 
        _mint(_msgSender(), MAX_SUPPLY);
        deployer = _msgSender();
    }

     /**
     * @dev Destroys `amount` tokens from the caller.
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) external {
        _burn(_msgSender(), amount);
    }


    /**
     * @dev Deployer can claim any tokens that transfered to this contract 
     * address for prevent users confused
     */
    function reclaimToken(ERC20 token) external {
        require(_msgSender() == deployer, "Only for deployer");
        require(address(token) != address(0));
        uint256 balance = token.balanceOf(address(this));
        token.transfer(msg.sender, balance);
    }

    function bulkAirdrop(address[] calldata _to, uint256[] calldata _value, string calldata _action) public payable onlyOwner
    {
        require(_to.length == _value.length, "Receivers and amount of different length");
        uint256 total_amount=0;
        for(uint256 i=0; i< _to.length; i++)
        {
            total_amount +=  _value[i];
        }
        if(keccak256(abi.encodePacked(_action)) == keccak256(abi.encodePacked("all"))) {
            require(total_amount < reserved_all, "Amount exceeded limit");
        }else if(keccak256(abi.encodePacked(_action)) == keccak256(abi.encodePacked("charity"))) {
            require(total_amount < charity, "Amount exceeded limit");
        }else if(keccak256(abi.encodePacked(_action)) == keccak256(abi.encodePacked("reserved_spl"))){
            require(total_amount < reserved_spl, "Amount exceeded limit");
        }
        
        require(approve(msg.sender , total_amount));
        for(uint256 i=0; i< _to.length; i++)
        {
            require(transferFrom(msg.sender, _to[i], _value[i]));
        }

        if(keccak256(abi.encodePacked(_action)) == keccak256(abi.encodePacked("all"))) {
            reserved_all = reserved_all - total_amount;
        }else if(keccak256(abi.encodePacked(_action)) == keccak256(abi.encodePacked("charity"))) {
            charity = charity - total_amount;
        }else {
            reserved_spl = reserved_spl - total_amount;
        }
    }

    //get supply according to parameters
    function get_value(string calldata _action) public view returns (uint256) {
        if(keccak256(abi.encodePacked(_action)) == keccak256(abi.encodePacked("all"))){
            return reserved_all;
        }else if(keccak256(abi.encodePacked(_action)) == keccak256(abi.encodePacked("charity"))) {
            return charity;
        }else {
            return reserved_spl;
        }
    }

    //mint function for owner
    function mint(uint256 _mintAmount) public onlyOwner{
        require((_mintAmount + totalSupply()) - 1 < MAX_SUPPLY, "Can't mint more than max supply");
        _mint(msg.sender, _mintAmount);
    }
}