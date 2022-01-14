<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" >
	<link rel="stylesheet" href="../tabsorter2.css" >
	<!-- <link rel="stylesheet" href="/Users/Miezan/Dev/Game/tabSorter2/dist/popup.9ca7e356.js" > -->
</svelte:head>

<script>
  import "./components/globals/Theme.svelte";
  import Button from "./components/Button.svelte";
  import Window from "./components/Window.svelte";
  import Payment from "./pages/Payment.svelte";
  import Favicon from "./pages/Favicon.svelte";


  import { faThumbsUp} from '@fortawesome/free-regular-svg-icons';
  import { faRedoAlt, faUndoAlt} from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-awesome';
  // https://fontawesome.com/icons?d=gallery&q=video&s=regular,solid&m=free
  import { refresh, comment, codeFork, camera, ban, apple, google, reddit, twitch, amazon, registered} from 'svelte-awesome/icons';
  import { fastForward, fastBackward, circle, play, pause, stop, eject} from 'svelte-awesome/icons';

  let currentState = false;
  let toggleEffect = true;
  let active = false;
  let togglePremium=true;

  let activateThisTab =(e)=>{
    console.log(e)
    Array.from(document.querySelectorAll('.tab.tab-lifted')).map(t=> t && t.classList.remove('tab-active'))
    e.target.classList.add('tab-active')
  }

  let decode=(mStr) => {
    to_be_deleted = []  // '2->x'
    to_be_created = []  // '2->n'
    to_be_swapped = [] // '2<->3'

    mStr.split(',').map( s => { 
      let [src, dest] = s.replaceAll(' ', '').split('->')
      switch(dest){
        case 'x':
          to_be_deleted.push(src)
          break;
        case 'n':
          to_be_created.push(src)
          break;
        default:
          if (s.includes('<->')) {
            [src, dest] = s.replaceAll(' ', '').split('<->')
            // to_be_swapped.push([[src, dest], [dest, src]])
          }
          break;
      }
    })

    return [
      to_be_deleted,
      to_be_created,
      to_be_swapped,
    ]
  }

  'w1_t0=>w1_t1'
  'w2,t2=>w1,t1'
  'w1,t1=>w1,t0'
  'w1,t1=>d'
  'w1,t2=>w3'
  let swap = (tabStr, mappingString) => {
    const [d,c,sp] = decode(mappingString)
    tabStr
    sp.map(e => {
      [e[0], e[1]] = [e[1], e[0]]
    })
    return sp
  }

let shuffle = (arr) => {
  const old_arr = [...arr]

  // in place modification
  // arr.forEach((v, i, a) => {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [a[i], a[j]] = [a[j], a[i]];
  // });

  //thanks to  https://stackoverflow.com/a/46545530/623546
  arr = arr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  // dom shuffling...
  old_arr.forEach((v, i)=>{
    swapNodes(old_arr[i], arr[i])
  })

  return arr;
};



  // thanks to https://stackoverflow.com/a/44562952/623546 :) 
  // function swapNodes(tindex1, tindex2) {

  function swapNodes(n1, n2) {
    // tabs = Array.from(document.querySelectorAll('a'))
    Array.from(document.querySelectorAll('.tab.tab-lifted')).map(t=> t && t.classList.remove('tab-active'))
    n1.classList.add('tab-active')
    var p1 = n1.parentNode;
    var p2 = n2.parentNode;
    var i1, i2;

    if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;

    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }

    if ( p1.isEqualNode(p2) && i1 < i2 ) {
        i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}

const runFn = (fnName)=>{
  const tabs = Array.from(document.querySelectorAll('a.tab'))
  switch (fnName) {
    case "shuffle":
      shuffle(tabs)
      break;
  
    default:
      console.log(`${fnName} fn Not Implemented`)
      break;
  }
}

</script>

<style>

  .wrapper {
    display: grid;
    grid-template-rows: repeat(13, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
  .app {
    /* grid-area: 1 / 1 / 5 / 5; */

    background: #ECF0F1;
    /* border: 2px solid #F9AA33; */
    border-radius: 4px;
    width: 266px;
    margin: 10px auto;
    padding: 5px;
    
    padding-bottom: 12px;
    /* margin: 5px auto; */
    
    /* border-radius: 8px;
    padding-bottom: 10px;
    padding-top: 4px;
    margin: 8px auto; */


  }

  .tab {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .tab-separator{
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    background-color: black;
    width: 1px;
    height: 20px;
    top: 5px;
    position: relative;
    /* padding: 0; */
    /* margin: 0; */
    display: inline-flex;
    margin-left: 1px;
  }

  .mockup-window:before {
    content: "";
    border-radius: 9999px;
    display: inline-block;
    height: .75rem;
    margin-bottom: 0;
    opacity: .3;
    width: .75rem;
    box-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
    margin-right: 80px;
}

.tab-lifted.tab-active:first-child:before, 
.tab-lifted.tab-active:last-child:after {
  background-image: var(--tab-corner-bg) !important;
} 
</style>
<div class="p-6 card bordered">
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">{togglePremium? "Premium": "Basic"} Features</span> 
      <input type="checkbox" checked="checked" class="toggle toggle-accent" on:change={()=>{
        togglePremium = !togglePremium
        console.log(togglePremium)
      }}>
    </label>
  </div>
</div>

<div class="">

  <div class="ts2">
    <div class="app container mx-auto w-1/3 grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-2 ">
      <Button text="Merge All" iconData='i-merge' tooltipText='Merges all open windows into one' tooltipPosition='left'/>
      <Button text="Merge last 2" iconData='i-merge' iconStyle="transform: rotate(45deg);" disable={togglePremium? false: true}/>
      <Button text="Sort All" iconData='i-sort-all'/>
      <Button text="Sort Current" iconData='i-sort'/>
      <Button text="Focus" iconData='i-target' disable={togglePremium? false: true}/>
      <Button text="UnFocus" iconData='i-focus-1' disable={togglePremium? false: true}/>
    </div>
    
    <div class="app container mx-auto w-1/3 grid grid-rows-2 gap-x-2 gap-y-2 grid-flow-col">
      <div class="grid grid-cols-3 grid-rows-1 gap-x-1">
        <Button text="Split V" iconData='i-split' tooltipText='Split the Current window Vertically and the resulting window side by side' tooltipPosition='left' disable={togglePremium? false: true}/>
        <Button text="Shuffle" iconData='i-shuffle' wrapperClass="" onClickHandler={()=>runFn("shuffle")}/>
        <Button text="Stack" iconData='i-undo' disable={togglePremium? false: true}/>
      </div>
      <div class="grid grid-cols-3 grid-rows-1 gap-x-1">
        <Button text="Split H" iconData='i-split' iconStyle='transform: rotate(-90deg);' disable={togglePremium? false: true}/>
        <Button text="Split Domains" iconData='i-flow-merge' wrapperClass="col-span-2" disable={togglePremium? false: true}/>
      </div>
    </div>
    
    <div class="app container mx-auto w-1/3 grid grid-rows-3 gap-x-2 gap-y-2 grid-flow-col">
      <div class="grid grid-cols-2 grid-rows-1 gap-x-1 gap-y-2">
        <Button text="Unite" iconData='i-unite-3' tooltipText='Split the Current window Vertically and the resulting window side by side' tooltipPosition='left'/>
        <Button text="Isolate" iconData='i-isolate' disable={togglePremium? false: true}/>
      </div>
      <div class="grid grid-cols-2 grid-rows-1 gap-x-1 gap-y-2">
        <Button text="Freeze" iconData='i-microchip' disable={togglePremium? false: true}/>
        <Button text="Close" iconData='i-cancel-2'/>
      </div>
      <div class="grid grid-cols-3 grid-rows-1">
        <Button text="Load" iconData='i-upload-outline' wrapperClass="col-span-3"/>
      </div>
    </div>
    
    <div class="app container mx-auto w-1/3 grid grid-rows-2 gap-x-2 gap-y-2 grid-flow-col">
      <div class="grid grid-cols-2 grid-rows-1 gap-x-1 gap-y-2">
        <Button text="Save All" iconData='i-save' tooltipText='Save all open windows' tooltipPosition='left' disable={togglePremium? false: true}/>
        <Button text="Save Current" iconData='i-save' tooltipText='Save the current window' tooltipPosition='right'/>
      </div>
      <div class="grid grid-cols-3 grid-rows-1">
        <Button text="Remove Duplicates" iconData='i-clone' wrapperClass="col-span-3" disable={togglePremium? false: true}/>
      </div>
    </div>
    
    <div class="app container mx-auto w-1/3 grid grid-rows-2 gap-x-2 gap-y-2 grid-flow-col">
      <div class="grid grid-cols-5 grid-rows-1 gap-x-1 gap-y-2">
        <Button text="GitHub" iconData='i-github' disableText={true} tooltipText='Stay updated!' tooltipPosition='left'/>
        <Button text="Email" iconData='i-paper-plane' disableText={true} tooltipText='email me :)' tooltipPosition='top'/>
        <Button text="Help" iconData='i-help' disableText={true} tooltipText='Need help?' tooltipPosition='top'/>
        <Button text="Options" iconData='i-options' tooltipText='Configure Your TS2' tooltipPosition='right' wrapperClass='col-span-2'/>
      </div>
      <div class="grid grid-cols-1 grid-rows-1">
        <Button text={togglePremium? "ManageSub": "Unlock Premium Version"} iconData='i-settings' wrapperClass="col-span-3"/>
      </div>
    </div>
  </div>
    
    <!-- <div class="container mx-auto mockup-window  window1 pt-1 bg-base-300"
      on:click={activateThisTab}>
    <a id='T1' draggable=true class="tab tab-lifted"> <Icon data={apple} style='height: 13px;font-size:20px'/> Tab 1</a> 
    <div class="tab-separator"/>
    <a id='T2' draggable=true class="tab tab-lifted tab-active"><Icon data={apple} style='height: 13px;font-size:20px'/> Tab 2</a> 
    <div class="tab-separator"/>
    <a id='T3' draggable=true class="tab tab-lifted"><Icon data={amazon} style='height: 13px;font-size:20px'/> Tab 3</a>
    <div   class="flex justify-center px-4 py-16 bg-base-200">
      Hello!
    </div>
  </div> -->

  <Window id={1} tabs={["amazon.com", "gmail.google.com", "apple.com", 'linkedin.com', 'linkedin.com']}/>
  <Window id={2} tabs={["google.com", "gmail.google.com", "apple.com", 'linkedin.com', 'linkedin.com']}/>
  <Window id={3} tabs={["google.com", "gmail.google.com", "apple.com", 'linkedin.com', 'linkedin.com']}/>
  
  <!-- </div> -->

  <Payment/>
</div>