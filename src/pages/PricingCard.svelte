<script>
  import Icon from 'svelte-awesome';
  import { check, checkCircleO } from 'svelte-awesome/icons';
  import { isMonthlyState } from '../components/store/index.js';

  
  export let title;
  export let description="-";
  export let price = 0;
  export let monthlyDiscount=0;
  export let annualDiscount=0;
  export let isMonthly;
  export let popular=false;
  export let buttonText='Support us';
  export let features = []
  
  let basePrice;
  let discountedPrice;

  let isDiscounted=false;

  isMonthlyState.subscribe(value => { 
    isMonthly = value
    
    basePrice = Math.ceil(price * (isMonthly? 1: 12))
    discountedPrice = Math.ceil(price * ( 1 - (isMonthly ? monthlyDiscount: annualDiscount)) * (isMonthly? 1: 12))

    // props are passed as strings... 
    isDiscounted = +monthlyDiscount || +annualDiscount ? true : false

    if (isMonthly && +monthlyDiscount){
      isDiscounted = true
      console.log("monthly discount",  monthlyDiscount)
    } else {
      if (+annualDiscount){
        isDiscounted = true
        console.log("annual discount TRUE",  annualDiscount)
      } else {
        console.log("annual discount FALSE",  annualDiscount)
        isDiscounted = false
      }
    }
  });

</script>

<style>
  
  .option {
    @apply p-1;
    @apply -m-8;
    @apply border-2;
    @apply bg-transparent;
    @apply border-red-500;
  }

</style>


<div class="option flex flex-grow flex-col md:w-1/3 md:w-1/4 {popular? "transform scale-90": "transform scale-75"} rounded-lg text-red-900 shadow-lg bg-secondary m-8">
  <div class="header bg-primary text-center p-2 rounded-btn  flex flex-col items-center p-8 bg-gray-200">
    {#if popular}
      <div class="badge badge-accent">Most Popular</div> 
      <span class="font-semibold text-4xl"> {title} </span>
    {:else}
      <span class="font-semibold text-4xl"> {title} </span>
    {/if}
    <!-- {#if isDiscounted} -->
      <div class="flex items-left mr-32 {isDiscounted && !isMonthly ? "":"invisible"}">
        <div class="line-through ">
          <span class="-text-2xl">$</span>
          <span class="-text-5xl font-bold ">{basePrice}</span>
        </div>
        <!-- <div class="text-xl font-light ml-1 text-white bg-accent rounded">{(isMonthly ? monthlyDiscount: annualDiscount)*100}% off</div> -->
      </div>
    <!-- {/if} -->
    <div class="flex items-center -mt-2">
      <span class="text-2xl">$</span>
      <span class="text-5xl font-bold">{discountedPrice}</span>
      <span class="text-xl text-red-900">/{isMonthly? "mo": "yr"}</span>
    </div>
    <div class="border-t-2 m-1 text-m w-full mt-3 p-1"> {description} <i class={`ts-icon i-coffee`}></i></div>
  </div>
  <div class="content bg-white text-gray-700 text-lg font-light rounded-b-lg p-4 h-full"> 
    {#each features as feature, i}
    <span class="feature">
      <div class="pl-6"> <Icon data={checkCircleO} class="text-accent mr-2"/> 
      <div class="inline-block p-1"> {feature.name} </div>  </div>
    </span>
    {/each}
  </div>
  <button class="btn btn-primary">
    {buttonText}
  </button>
</div>
