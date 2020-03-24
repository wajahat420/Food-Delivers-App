const reducer = (state = {
	receiver : "",
	signin : "abc",
	imageURL : "",
	students : [],
	messages : [],
	AllPosts : [],
	msgBoxTitles : [],
	openMsgWindow : "",
	searchText : "",
	sortBy : "name",

}, action) => {
	switch (action.type) {
		 case "LIKE":
			  let tempArr = [...state.AllPosts]
			  let likeValue = tempArr[action.index].like
			  tempArr[action.index].like = !likeValue
			  state ={
					...state,
					AllPosts : tempArr
			  }
		 break
		 default :
				  return state 

	}
	return state
};

export default reducer;