<template>
    <nav class="navbar navbar-light bg-light">
        <div class="col-md-3 col-3">
        <a class="navbar-brand" href="#">
            <img src="http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_fullhor_r1a-01.png" class="img-fluid" alt="open-table-logo">
        </a>
        </div>
        <div class="col-md-1 col-2 float-right" >
            <span class="basket-badge" v-if="basketCounter">{{basketCounter}}</span>
            <img src="../assets/pics/basket.svg" class="img-fluid" alt="basket" id="basket-img" @click='showPrice = !showPrice'>
            <div id="total-price" v-show="showPrice"><span class="text-danger">Total {{totalPrice}}£</span></div>
        </div>
</nav>
</template>

<script>
    import { basketCounter } from '../main.js';
  
    export default {
    data: function () {
     return {
         basketCounter: null,
         totalPrice: 0,
         showPrice: false,
        }
    },
    created() {
    // Using the service bus
     basketCounter.$on('addToBasket', (i, totalPrice) => {
         this.basketCounter = i;
         this.totalPrice = totalPrice;
         console.log("i = " + i);
         console.log("price = " + totalPrice);
        });
    }
  }
  
</script>