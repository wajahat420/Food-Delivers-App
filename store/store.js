const reducer = (state = {
	shopClicked : {},


}, action) => {
	switch (action.type) {
		 case "shopClicked":
			//   let tempArr = [...state.AllPosts]
			//   let likeValue = tempArr[action.index].like
			//   tempArr[action.index].like = !likeValue
			  state ={
					...state,
					shopClicked : action.shopClicked
			  }
			//   console.warn("click",action.shopClicked)
		 break
		 default :
				  return state 

	}
	return state
};

export default reducer;