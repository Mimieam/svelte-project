<style>
  .tab {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    width: auto;
    min-width: 0;
    /* display: block; */
    text-overflow: ellipsis;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .tab_inner {
    overflow: hidden;
    text-overflow: ellipsis;
    display: contents;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .tab_inner span {
    overflow: hidden;
    width: 65%;
    min-width: 0;
    text-overflow: ellipsis;
  }

  .tab-lifted.tab-active:first-child:before, 
  .tab-lifted.tab-active:last-child:after {
    background-image: var(--tab-corner-bg) !important;
  } 
</style>

<script>
  import Favicon from "./../pages/Favicon.svelte";
  import Icon from 'svelte-awesome';
  import { refresh, comment, codeFork, camera, ban, apple, google, reddit, twitch, amazon, linkedin} from 'svelte-awesome/icons';

  export let id;
  export let title='Tab title';
  export let fav='';

  const favicon_dict = {
    "google.com": google,
    "apple.com": apple,
    "twitch.com": twitch,
    "amazon.com": amazon,
    'linkedin.com': linkedin,
  }



</script>

<!-- <div class="container mx-auto mockup-window  window1 pt-1 bg-base-300"> -->
<!-- <a id={id} draggable=true class="tab tab-lifted"> <Icon data={favicon_dict[fav]} style='height: 13px;font-size:20px'/><span>{title}</span></a>  -->

  <a id={id} draggable=true class="tab tab-lifted"> <div class="tab_inner"><Favicon url={fav}/><span>{title}</span></div></a> 

<!-- <div class="tab-separator"/> -->
  <!-- <a id='T2' draggable=true class="tab tab-lifted tab-active"><Icon data={apple} style='height: 13px;font-size:20px'/> Tab 2</a> 
  <div class="tab-separator"/>
  <a id='T3' draggable=true class="tab tab-lifted"><Icon data={amazon} style='height: 13px;font-size:20px'/> Tab 3</a>
  <div class="tab-content flex justify-center px-4 py-16 bg-base-200"> Hello! </div>
</div>   -->