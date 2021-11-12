<script>
  import "./components/globals/Theme.svelte";

  import Bar from './components/Bar.svelte';
  import Base from './components/Base.svelte'
  // import Footer from './components/Footer.svelte'

  import { faThumbsUp} from '@fortawesome/free-regular-svg-icons';
  import { faRedoAlt, faUndoAlt} from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-awesome';
  // import Icon from 'svelte-awesome/components/Icon.svelte'
  // https://fontawesome.com/icons?d=gallery&q=video&s=regular,solid&m=free
  import { refresh, comment, codeFork, camera, ban } from 'svelte-awesome/icons';
  import { fastForward, fastBackward, circle, play, pause, stop, eject} from 'svelte-awesome/icons';


  let current = ''
  let isRecording = false
  let toggleEffect = false



</script>

<style>

/*:global(body) {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}*/

.wrapper {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);

  height: 100vh;
}

.app {
  grid-area: 1 / 1 / 5 / 5;

  background: #ECF0F1;
  border: 2px solid #F9AA33;
  border-radius: 4px;
  margin: 0.3%;
}

.bar {
  height: 60px;
  background: #344955 ;
  grid-area: 4/1/5/5;
  /* max-height: 100px; */
  border-radius: 5px 5px 0 0;
  margin-top: auto;
  justify-items: center;
  align-items: center;
}

.button {
  @apply w-32;
  position:relative;
  top: 4px;
}
.button:focus{
  outline: none
}

.pushed-down,
.button:active{

  top:8px;
  @apply border-b-0;
}

@keyframes pulsate-fwd {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.01);
    filter: brightness(120%);
  }
  100% {
    transform: scale(1);
  }
}

.pulsate-fwd {
  @apply inline-block;
  animation: pulsate-fwd 1s ease-in-out infinite both;
}


</style>

<div class="wrapper" data-theme="customTheme">
  <div class="app">
    <!-- <Base/> -->
    <Bar/>
  </div>
  <div class="bar">
    <button
      on:click="{() => {
        isRecording = !isRecording
        current = (current=='RecordBtn'? '' : 'RecordBtn')
      }}"
      class="button {current == 'RecordBtn'? 'bg-red-700 pushed-down' : 'bg-red-500 hover:border-red-400 border-b-4'}
               w-32 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      >
      {#if !isRecording}
        Record
      {:else}
        Pause
      {/if}
      <!-- basic -->
      <span class="{isRecording? 'pulsate-fwd text-red-900' : 'text-orange-900'}">
        <Icon data={circle} />
      </span>

    </button>

    <button
      on:click="{() => current = (current=='PlayBtn'? '' : 'PlayBtn')}"

      class="button {(current == 'PlayBtn' && toggleEffect)? 'bg-red-700 pushed-down' : 'bg-red-500 border-b-4'}
               w-32 hover:bg-red-600 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded"
      >
      {#if !isRecording}
        Play
      {:else}
        Stop
      {/if}

      <Icon data={!isRecording? play: stop} class="text-red-900"/>

    </button>

  </div>
</div>
<!-- <Footer/> -->
