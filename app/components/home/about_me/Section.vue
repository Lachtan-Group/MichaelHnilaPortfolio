<template>
  <UContainer class="overflow-x-clip">
    <AppSectionHeader title="Little about myself" />
    <div class="grid min-w-0 gap-10 overflow-x-clip lg:grid-cols-[1.15fr_.85fr] lg:items-start">
      <div class="min-w-0 max-w-2xl space-y-5">
        <AppRevealComponent :delay="0">
          <p class="text-xl/relaxed font-medium text-highlighted text-balance">
            Hey, I'm Michael and I break things to figure out how they work.
          </p>
        </AppRevealComponent>

        <AppRevealComponent :delay="80">
          <p class="text-base/relaxed text-toned">
            I'm a self-taught developer from Slovakia, and I never really grew out of the
            "but how does it <em>actually</em> work?" phase. That's how I ended up building
            my own OAuth server just so I'd finally understand auth instead of copy-pasting
            it, self-hosting half my life on a Raspberry Pi because paying for a VPS felt
            like giving up, and writing Discord bots at 2am just because the idea wouldn't
            leave me alone.
          </p>
        </AppRevealComponent>

        <AppRevealComponent :delay="160">
          <p class="text-base/relaxed text-toned">
            These days I spend most of my time in Vue on the frontend and Symfony on the
            backend, with Docker holding the whole mess together. I'm pretty picky about
            keeping code readable and keeping business logic where it belongs because 
            I've been the guy coming back to his own code six months later with no idea 
            what it does. Future-me appreciates the effort.
          </p>
        </AppRevealComponent>

        <AppRevealComponent :delay="220">
          <p class="text-base/relaxed text-toned">
            The best feeling is still when something I built for myself turns out to be
            useful to someone else. That's why most of my projects start as "I wish this
            existed" and end up on GitHub at 3am with a README I promise I'll finish tomorrow.
          </p>
        </AppRevealComponent>
      </div>

      <div class="min-w-0 lg:sticky lg:top-24">
        <HomeAboutMeSideLinks  />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
</script>