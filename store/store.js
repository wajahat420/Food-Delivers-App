const reducer = (state = {
	shopClicked : {},
	cart : {},
	updateQty : {},
	total : 0,
	cartQuantity:0,
	shopItems :	
	[
		{
			id: "123",
			items : 
				{
					"Shaving Erasers" : [
						{id:Date.now()*Math.random(),name:"Gillete",piece:30,packet:180},
						{id:Date.now()*Math.random(),name:"Gillete",piece:60,packet:350},
						{id:Date.now()*Math.random(),name:"Mach 3",piece:50,packet:300}
					],
					"Chips" : [
						{id:Date.now()*Math.random(),name:"French Cheese Lays",piece:30},
						{id:Date.now()*Math.random(),name:"Masala Lays",piece:30},
						{id:Date.now()*Math.random(),name:"French Cheese Lays",piece:50},
						{id:Date.now()*Math.random(),name:"Masala Lays",piece:50}
					],
					"Juices and Cold drinks" : [
						{id:Date.now()*Math.random(),name:"slice",piece:20,packet:300},
						{id:Date.now()*Math.random(),name:"pakola",piece:35,packet:350}
					],
					"Grocery" : [
						{id:Date.now()*Math.random(),name: "sugar","1 kg":80},
						{id:Date.now()*Math.random(),name:"aata","1kg":60,"5 kg":500}
					],
					"Tofee" : [
						{id:Date.now()*Math.random(),name:"Ding Dong",piece:2,packet:5000},
						{id:Date.now()*Math.random(),name:"Fresh up",piece:2},
						{id:Date.now()*Math.random(),name:"Fanta",piece:1},
						{id:Date.now()*Math.random(),name:"Eclairs",piece:2}
					],
				}
		},
		{
			id: "234",
			items : 
				{
					"Juices and Cold drinks" : [
						{id:Date.now()*Math.random(),name:"slice",piece:20,packet:300},
						{id:Date.now()*Math.random(),name:"pakola",piece:35,packet:350}
					],
					"Grocery" : [
						{id:Date.now()*Math.random(),name: "sugar","1 kg":80},
						{id:Date.now()*Math.random(),name:"aata","1kg":60}
					]
				}
		},
		{
			id: "299",
			items : 
				{
					"Juices and Cold drinks" : [
						{id:Date.now()*Math.random(),name:"slice",piece:20,packet:300},
						{id:Date.now()*Math.random(),name:"pakola",piece:35,packet:350}
					],
					"Grocery" : [
						{id:Date.now()*Math.random(),name: "sugar","1 kg":80},
						{id:Date.now()*Math.random(),name:"aata","1kg":60}
					]
				}
		},
		{
			id: "199",
			items : 
				{
					"Juices and Cold drinks" : [
						{id:Date.now()*Math.random(),name:"slice",piece:20,packet:300},
						{id:Date.now()*Math.random(),name:"pakola",piece:35,packet:350}
					],
					"Grocery" : [
						{id:Date.now()*Math.random(),name: "sugar","1 kg":80},
						{id:Date.now()*Math.random(),name:"aata","1kg":60}
					]
				}
		},
		{
			id:"789",
			items : 
				{
					"Milk and Yougart" : [
						{id:Date.now()*Math.random(),name:"milk","1 kg" : 105},
						{id:Date.now()*Math.random(),name:"yougart","1kg":90}
					],
					"Others" : [
						{id:Date.now()*Math.random(),name:"small papay","1 kg":60},
						{id:Date.now()*Math.random(),name:"big papay","1 kg":80},
						{id:Date.now()*Math.random(),name:"baqar khani",packet:50},
						{id:Date.now()*Math.random(),name:"egg",piece:10,dozen:110}
					]
				},
			
		},
		{
			id : "198",
			items: 
				{
					"Biryani and Pulao" : [
						{id:Date.now()*Math.random(),name:"Chicken Biryani",plate:70},
						{id:Date.now()*Math.random(),name:"Chicken Pulao",plate:70},
						{id:Date.now()*Math.random(),name:"Beef Biryani",plate:70},
						{id:Date.now()*Math.random(),name:"Beef Pulao",plate:70},
						{id:Date.now()*Math.random(),name:"Saadi Biryani",plate:50},
						{id:Date.now()*Math.random(),name:"Saadi Pulao",plate:50}

					],
					"Daal and Salan": [
						{id:Date.now()*Math.random(),name:"Daal Maash",plate:80},
						{id:Date.now()*Math.random(),name:"Daal Maash Fry",plate:100},
						{id:Date.now()*Math.random(),name:"Daal Chana",plate:80},
						{id:Date.now()*Math.random(),name:"Daal Chana Fry",plate:100},
						{id:Date.now()*Math.random(),name:"Chicken Qorma",plate:120}
					],
					"Roti and others" : [
						{id:Date.now()*Math.random(),name:"Naan",piece: 10},
						{id:Date.now()*Math.random(),name:"Chapati",piece:9},
						{id:Date.now()*Math.random(),name:"Shermaal",piece:30},
						{id:Date.now()*Math.random(),name:"Taftan",piece:30}
					]
				}
			
		}
	]	
}, action) => {
	switch (action.type) {
		 case "shopClicked":
			  state ={
					...state,
					shopClicked : action.shopClicked
			  }
			//   console.warn("click",action.shopClicked)
		 break
		 case "cart":
			 state = {
				 ...state,
				cart : action.updateCart
			 }
			//  console.warn("store.js cart=",state.cart)
		break
		case "update":
			state= {
				...state,
				updateQty :  action.update
			}
			// console.warn("store.js updateQty = ",state.updateQty)
		break
		case "total":
			state= {
				...state,
				total :  action.updateTotal
			}
			// console.warn("store.js ",state.total)
		break
		case "quantity":
			state= {
				...state,
				cartQuantity :  action.updateQuantity
			}
			// console.warn("store.js ",action.updateQuantity)
		break
		 default :
			return state 

	}
	return state
};

export default reducer;