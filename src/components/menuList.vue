<template>

    <!-- <div v-if="loading">Loading...</div> -->
	  <section>
		<div class=" product-container">

			<div class="menu-dish-wrapper row">
				<div class="menu-title col-12">
					<p>Starter</p>
					<hr>
				</div>
			 <div v-for="data in dishes.starters" :key="data.id" class="product-item col-md-3 col-sm-6">
				 <div class="content-overlay" @click="addToBasket('starters',data.price)"></div>
				 <figure class="product-image">
					  <img :src="starterDish" alt="Image" class="img-fluid dish-img"> 
				 </figure>
				 <div class="content-details fadeIn-bottom">
					 <span class="item-transp-header ">
						 <p class="font-weight-bold text-uppercase">{{popuptxt}}</p>
					</span>
				 </div>
								 <p class="text-danger font-weight-bold text-uppercase">{{data.price}}£</p>
                 <div class="item-header" v-text="data.name"></div>
		    </div>
			 </div>

			 <div class="menu-dish-wrapper row">
				<div class="menu-title col-12">
					<p>Main</p>
					<hr>
				</div>
			 <div v-for="data in dishes.mains" :key="data.id" class="product-item col-md-3 col-sm-6">
				 <div class="content-overlay" @click="addToBasket('mains',data.price)"></div>
				 <figure class="product-image">
					  <img :src="mainDish" alt="Image" class="img-fluid dish-img"> 
				 </figure>
				 <div class="content-details fadeIn-bottom">
					 <span class="item-transp-header ">
						 <p class=" font-weight-bold text-uppercase">{{popuptxt}}</p>
					</span>
				 </div>
								 <p class="text-danger font-weight-bold text-uppercase">{{data.price}}£</p>
                 <div class="item-header" v-text="data.name"></div>
		    </div>
			 </div>

			 <div class="menu-dish-wrapper row">
				<div class="menu-title col-12">
					<p>Dessert</p>
					<hr>
				</div>
			 <div v-for="data in dishes.desserts" :key="data.id" class="product-item col-md-3 col-sm-6">
				 <div class="content-overlay" @click="addToBasket('desserts',data.price)"></div>
				 <figure class="product-image">
					  <img :src="dessertDish" alt="Image" class="img-fluid dish-img"> 
				 </figure>
				 <div class="content-details fadeIn-bottom">
					 <span class="item-transp-header ">
						 <p class=" font-weight-bold text-uppercase">{{popuptxt}}</p>
					</span>
				 </div>
				  <p class="text-danger font-weight-bold text-uppercase">{{data.price}}£</p>
                 <div class="item-header" v-text="data.name"></div>
		    </div>
			 </div>


		 </div>
	  </section>
</template>

<script>

import { basketCounter } from '../main.js';
const menuJsn = require("../assets/data/menu-data.json")
const sdishPic = require("../assets/pics/starter-dish.svg")
const mdishPic = require("../assets/pics/main-dish.svg")
const ddishPic = require("../assets/pics/dessert-dish.svg")

export default {
	name: 'menuList',
	props :['basketCounter'],
    data (){
        return {
						dishes: menuJsn,
						starterDish: sdishPic,
						mainDish : mdishPic,
						dessertDish: ddishPic,
						popuptxt: 'Add to Basket',
						basketCount : 0,
						typeOfDish: [],
						totalPrice: null,
            }
		},
		methods : {
			addToBasket(type,price){
				let occurrences= [];
				this.totalPrice += price;

				// this.typeOfDish.push(type);
				// 	for (let i = 0, j = this.typeOfDish.length; i < j; i++) {
				// 	occurrences[this.typeOfDish[i]] = (occurrences[this.typeOfDish[i]] || 0) + 1;
				// 	}
				// console.log(occurrences);        // num of occurances for the dishes

				this.basketCount++;

				basketCounter.$emit('addToBasket' ,this.basketCount, this.totalPrice);
			}
		}
}   
</script>
