<style>
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
.tab-content{
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 3s;
    /* background-color: rgb(165, 165, 165); */
  }

.window {
  white-space: nowrap;
}
.tab_group {
  min-width: 0;
  display: inline-flex;
  width: 100%;
}
.tab-lifted.tab-active:first-child:before, 
.tab-lifted.tab-active:last-child:after {
  background-image: var(--tab-corner-bg) !important;
} 
</style>

<script>
  import { onMount } from 'svelte';
  import Tab from './Tab'

  export let title='Tab title';
  export let tab_content = title || 'Hello!';
  export let id;
  export let tabs=[];

  let activateThisTab =(e)=>{
    // console.log(e)
    
    let p = e.target.parentElement
    while (!p.classList.contains("tab")) {
      // console.log(p)
      p = p.parentElement
    }
    Array.from(document.querySelectorAll(`#W${id} .tab.tab-lifted`)).map(t=> t && t.classList.remove('tab-active'))
    p.classList.add('tab-active')
  }

  const attrObserver = new MutationObserver((mutations) => {
  mutations.forEach(mu => {
    if (mu.type !== "attributes" && mu.attributeName !== "class") return;
    console.log("class was modified!", mu.target);
    tab_content = mu.target.querySelector('span').innerText
  //   const old_content=mu.target.querySelector('span').innerText
  //   mu.target.querySelector('tab-content').innerHTML = 
  //   `<object data="https://${mu.target.querySelector('span').innerText}" width="400" height="300" type="text/html">
  //       Alternative Content
  //   </object>`
  });
  });

  onMount(async () => {
    const ELS_test = document.querySelectorAll(`#W${id} .tab.tab-lifted`)
    // console.log(ELS_test, `#W${id} .tab.tab-lifted`)
    ELS_test.forEach(el => attrObserver.observe(el, {attributes: true}));
	});  


</script>

<div id={`W${id}`} class="window container mx-auto mockup-window pt-1 bg-base-300"
  on:click={activateThisTab}>
  <div class="tab_group">
    {#each tabs as domain, tab_idx}
    <Tab fav={domain} title={domain} id={`W${id}T${tab_idx}`}/>
    <div class="tab-separator"/>
    {/each}
  </div>

  <div class="tab-content flex justify-center px-4 py-16 bg-base-200"> {tab_content} </div>
</div>  