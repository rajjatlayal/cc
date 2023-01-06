export const initialState = {
    global: { 
		walletProvider: undefined,
		walletAddress: '',
		chainId: '',
		walletBalance: 0.00
	}
  };
  
export const reducer = (state, action) => {
	switch (action.type) {
	  case 'changeWalletProvider':
		// console.log('dispatchnewvalue');
	  var a={
		global: {...state.global,
			walletProvider:action.newWalletProvider.walletProvider}
		};
		return a;		
		break;
	  case 'changeWalletAddress':
		// console.log('dispatchnewvalue');
	  	var a={
		global: {...state.global,
			walletAddress:action.newWalletAddress.walletAddress}
		};
		return a;		
		break;
	  case 'changeWalletBalance':
		// console.log('dispatchnewvalue');
	  	var a={
		global: {...state.global,
			walletBalance:action.newWalletBalance.walletBalance}
		};
		return a;		
		break;
		case 'changeChainId':
		// console.log('dispatchnewvalue chain',action.newChainId.chainId);
	  	var a={
		global: {...state.global,
			chainId:action.newChainId.chainId}
		};
		return a;		
		break;
	    default:
		return state;
	}
};