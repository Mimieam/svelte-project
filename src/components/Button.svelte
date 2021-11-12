<script>
  import "./globals/Theme.svelte";

  // import Icon from 'svelte-awesome';
  // import { fastForward, fastBackward, circle, play, pause, stop, eject} from 'svelte-awesome/icons'

  export let currentState = false
  export let iconData=true? play: stop;
  export let text='';
  export let wrapperClass='';
  export let tooltipText='';
  export let tooltipPosition='right';
  export let iconStyle='';
  export let disableText=false;
  export let disable=false;

</script>

<style>
  /* --pf and -p are declARED SOMEWHWERE BY tailwind, im just trying to mimic their colors here */
.solid_shadow{
  box-shadow: 0px 6px hsla(var(--pf) / var(--tw-border-opacity));
}
.solid_shadow:hover{
  box-shadow: 0px 6px hsla(var(--p) / var(--tw-border-opacity));
}
/* .button:hover{
  @apply text-white;
} */

.disabled {
  transform: translateY(0.375rem);
  box-shadow: none;
  @apply bg-gray-300;
}

.solid_shadow.disabled {
  box-shadow: none;
}
.customGridFlow {
  grid-column: span;
}
</style>


<div data-tip='{tooltipText}' 
class="{(tooltipText? `tooltip tooltip-accent tooltip-${tooltipPosition}`: '')} {wrapperClass}
        {(currentState =='Pressed'?'tooltip-open': '')}
        {(disable ? "":"")}
        ">
    <button

      on:click="{() => currentState = (currentState=='Pressed'? '' : 'Pressed')}"

      class="button {
        (currentState == 'Pressed') ? 
          'bg-primary-focus transform translate-y-1.5' : 
          'bg-primary solid_shadow solid_shadow:hover'
      }
      w-full h-9 rounded-lg text-center text-sm font-normal 
      border-primary-focus 
      hover:border-primary hover:bg-primary-focus 
      place-items-center  place-content-center
      flex 
      {(disable ? 'disabled text-gray-600 bg-gray-300 hover:text-gray-600': 'text-red-900 text-white hover:text-white')}
      "
      >
      <i class={`ts-icon ${iconData}`} style={iconStyle}></i>
      <!-- <Icon data={svg.cancel#sort} class="text-red-900 i-merge"/> -->
      {#if !disableText}
        <span class="ts-innerLabel">{text}</span>
      {/if}
    </button>
  </div>