// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

abstract contract ERC20Interface {
    function balanceOf(address) view public virtual returns (uint);
}

contract BalanceChecker {

    struct Token {
        address tokenAddress;
        uint balance;
    }

    function tokenBalance(address _user, address _token) private view returns(uint){
        return ERC20Interface(_token).balanceOf(_user);
    }

    function checkBalances(address _walletAddress, address[] memory _tokens) public view returns(Token[] memory){
        Token[] memory tokenBalances = new Token[](_tokens.length);
      
            for(uint i = 0; i < _tokens.length; i++){
                // Could do this a bit smarter
                if (_tokens[i] != address(0x0)) { 
                    Token memory tempData = Token(_tokens[i], tokenBalance(_walletAddress, _tokens[i]));
                    tokenBalances[i] = tempData;
                } else {
                    Token memory tempData = Token(_tokens[i], 0);
                    tokenBalances[i] = tempData; 
                }
            }
        return tokenBalances;

    }
}