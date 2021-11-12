<style global lang="postcss">

:root {
  --main-color: #95a5a6;
  --accent-color: #7f8c8d;
  --text-color: #ecf0f1;
  --dark-background-color: #1F2937;
  /* --background-color: #FFF; */
  --background-color: aliceblue;
  --text-size: 15px;
  --icon-size: 27px;
  --button-height:35px;
  --button-radius: 15px;

}

.tab-lifted.tab-active:first-child:before, 
.tab-lifted.tab-active:last-child:after {
  background-image: var(--tab-corner-bg) !important;
}

/* @font-face {
  font-family: 'tabsorter2';
  src: url('../font/tabsorter2.eot?48929411');
  src: url('../font/tabsorter2.eot?48929411#iefix') format('embedded-opentype'),
       url('../font/tabsorter2.svg?48929411#tabsorter2') format('svg');
  font-weight: normal;
  font-style: normal;
} */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* @import "./tabsorter2.css"; */

.ts-icon{
  font-size: var(--icon-size);
  align-items: center;
}

</style>
