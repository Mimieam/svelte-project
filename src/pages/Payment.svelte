<script>

    import PricingCard from "./PricingCard.svelte";
    import { isMonthlyState } from '../components/store/index.js';

    let isMonthly;
    isMonthlyState.subscribe(value => { isMonthly = value });

    const basicFeatures = [
      {id: 1, name: 'Sort current window', tags:['sort']},
      {id: 1.2, name: 'Sort All Window', tags:['sort']},
      {id: 1.3, name: 'Sort by Url', tags:['sort', 'Option']},
      {id: 2, name: 'Unite', tags:['isolate']},
      {id: 3, name: 'Close', tags:['isolate']},
      {id: 4, name: 'Shuffle', tags:['shuffle']},
      {id: 2, name: 'Save / Load', tags:['Save/Load']},
      {id: 4, name: 'Security fixes', tags:['sort', 'Option']},
    ]
    
    const premiumFeatures = [
      {id: 1, name: 'All Basic Features + ', tags:['sort']},
      {id: 2, name: 'Freeze', tags:['freeze']},
      {id: 2, name: 'Focus / Unfocus Mode', tags:['freeze']},
      {id: 2, name: 'Split Vertically / Horizontally', tags:['Split']},
      {id: 2, name: 'Split Domains', tags:['Split']},
      {id: 2, name: 'Stack', tags:['stack']},
      {id: 2, name: 'Isolate in new Window', tags:['Isolate']},
      {id: 2, name: 'Free memory', tags:['Freeze']},
      {id: 2, name: 'Extension Compact Mode', tags:['Save/Load']},
      {id: 2, name: 'Direct Feedbacks', tags:['Save/Load']},
      {id: 1, name: 'Multi monitor Support', tags:['split']},
      {id: 1, name: 'Shortcuts Support', tags:['split']},
      {id: 1.4, name: 'Sort by Title', tags:['sort', 'Option']},
      {id: 1.4, name: 'Reverse sorting', tags:['sort', 'Option']},
    ]
    
    const PremiumBleedingEdge = [
      {id: 1, name: 'All Premium Features + ', tags:['sort']},
      {id: 1, name: 'Auto Sort', tags:['sort']},
      {id: 1, name: 'Trailing Pinned Tabs', tags:['sort']},
      {id: 1, name: 'Domain classification', tags:['sort']},
      {id: 1, name: 'Split from Here', tags:['split']},
      {id: 1.5, name: 'Sort by Regex', tags:['sort', 'Option']},
      {id: 1.5, name: 'Accepting Feature Requests', tags:['sort', 'Option']},
      {id: 1.5, name: 'Support via email', tags:['sort', 'Option']},
    ]
    
</script>

<style>

.purchase_options{
    background: #ECF0F1;
}

.toggle, .toggler {
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}

.toggler {
  color: #ddd;
  transition: .2s;
  font-weight: bold;
}

.toggler--is-active {
  @apply text-primary;
}

</style>

<div class="purchase_options p-20 mt-10">
  <h2 class="text-2xl font-medium text-center text-gray-600">Simple Pricings</h2> 
  <label class="cursor-pointer label justify-center">
    <!-- <span class="label-text">{isMonthly? "Monthly": "Annual"} Features</span>  -->
    <span class="toggler {isMonthly? "toggler--is-active": ""}">Monthly</span>
    <input type="checkbox" class="toggle bg-accent toggle-accent" on:change={()=>{ isMonthlyState.update(val=> !val)}}>
    <span class="toggler {isMonthly? "" : "toggler--is-active"}">Annually</span>
  </label>

  <div class=" flex flex-flow flex-row">
    <PricingCard title="Basic" price=0 monthlyDiscount=0 annualDiscount=0  isMonthly={isMonthly} description="Enjoy TS2 Freely Forever" features={basicFeatures}/>
    <PricingCard title="Premium" price=4.99 monthlyDiscount=0 annualDiscount=.2 isMonthly={isMonthly} description="Unleash TS2 ~ for the price of a cup of coffee" features={premiumFeatures} popular/>
    <PricingCard 
      title="Experimental+" buttonText='Support us ' 
      price=19.99 monthlyDiscount=0 annualDiscount=.4 isMonthly={isMonthly} description="TS2 Bleeding Edge :) " features={PremiumBleedingEdge}
      redirectUrl={"https://buy.stripe.com/test_bIYdRw3ta9oMeEodQQ"}/>
  </div>

</div>