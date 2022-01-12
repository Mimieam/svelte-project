<style>
  :root{
    --bg-color:#39415f;
    --text-color:#e2cac3;
    --text-color-2:#eae3dc;
    --text-color-3:#c4cde1;
    --accent: #647299;
    --accent-2: #3b4664;
    --accent-3: #181f33;
    --accent-4: #d14030;
    --accent-5: #76D6CB;
  }

  

</style>
<script>

</script>

<!-- https://codepen.io/rachsmith/pen/BNKJme
https://codepen.io/soulwire/pen/mErPAK 
https://codepen.io/onecastell/pen/VwZWBvr
https://codepen.io/yemon/pen/pWoROm
https://codepen.io/alvaromontoro/pen/RmRjvg
https://codepen.io/sschepis/pen/uiHmr
https://codepen.io/mandymichael/pen/aJLYVz
https://codepen.io/bennettfeely/pen/lgybC
-->

<section style="background-color: var(--bg-color); overflow: hidden;" class="h-full">
  <div class=" 2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
    <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
      <div class=" lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
        <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Coming soon! </span>
        <h1 class=" text-neutral-600 md:text-7xl lg:text-5xl mb-8 text-4xl font-bold leading-none tracking-tighter"> TabSorter 2 </h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500"> The Tab Manager on Steroid  - Merge, Sort, split and much more </p>
        <form action="" method="post" id="revue-form" name="revue-form" target="_blank" class=" border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex p-2 mt-8 transition duration-500 ease-in-out transform">
          <div class="revue-form-group flex-1 min-w-0">
            <label for="member_email" class="sr-only">Email address</label>
            <input id="cta-email" type="email" class="w-full text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md" placeholder="Enter Your Email  "
            style="background-color: var(--accent-2); color:var(--text-color-2);"
            >
          </div>
          <div class="sm:mt-0 sm:ml-3 revue-form-actions mt-4">
            <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" class=" hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10 block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow" 
            > Notify me </button>
          </div>
        </form>
        <div class="sm:max-w-lg sm:flex">
          <!-- <p class="mt-3 text-xs text-gray-500"> we won't spam promised!</p> -->
        </div>
      </div>
      <div class="lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 w-full mt-12">
        <div>
          <div class="relative w-full max-w-lg">
            <div class=" bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute top-0 rounded-full"></div>
            <div class=" bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 absolute rounded-full"></div>
            <div class="relative">
              <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="https://d33wubrfki0l68.cloudfront.net/374d3e75d4ab6cf2141b12e76a8de965299dff67/9e8fe/images/placeholders/square.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- <section class="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
  <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
    <span class="mb-3 text-white bg-blue-900 badge">Pre Beta</span>
    <h1 class="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">Great customer relationships start here.</h1>
    <form class="w-full mb-6">
      <label class="sr-only">Your Email</label>
      <div class="block lg:hidden">
        <input class="text-blue-900 form-input form-input-lg" type="email" placeholder="Enter your email..." required="true" />
        <button class="w-full mt-2 text-white bg-blue-900 hover:bg-blue-800 btn btn-lg" type="submit">Get Started</button>
      </div>
      <div class="hidden w-full form-append lg:flex">
        <input class="text-blue-900 form-input form-input-lg" type="email" placeholder="Enter your email..." required="true" />
        <button class="text-white bg-blue-900 hover:bg-blue-800 btn btn-lg" type="submit">Get Started</button>
      </div>
    </form>
    <p class="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">Get the #1 Business Messenger and start delivering personalized experiences at every stage of the customer journey.</p>
  </div>
  <div>
    <img
      src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
      alt="3 women looking at a laptop"
      class="object-cover w-full h-64 bg-gray-100 md:h-full"
      loading="lazy"
    />
  </div>
</section> -->

<!-- <div class="container mx-auto mockup-window  window1 pt-1 bg-base-300">
  <a id='T1' draggable=true class="tab tab-lifted"> <Icon data={apple} style='height: 13px;font-size:20px'/> Tab 1</a> 
  <div class="tab-separator"/>
  <a id='T2' draggable=true class="tab tab-lifted tab-active"><Icon data={apple} style='height: 13px;font-size:20px'/> Tab 2</a> 
  <div class="tab-separator"/>
  <a id='T3' draggable=true class="tab tab-lifted"><Icon data={amazon} style='height: 13px;font-size:20px'/> Tab 3</a>
  <div class="tab-content flex justify-center px-4 py-16 bg-base-200"> Hello! </div>
</div>   -->