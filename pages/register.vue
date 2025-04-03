<template>
  <div class="h-full w-full p-4 grid gap-8 lg:grid-cols-[520px_1fr]">
    <!-- sidebar -->
    <Sidebar />
    <div class="w-full h-full flex justify-center items-center">
      <p class="text-foreground-light max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia hic
        odit vel quos odio quidem perferendis, voluptatibus fuga corporis dolore
        sunt expedita ad consequuntur dignissimos sapiente! Vero corporis
        voluptatem itaque delectus eius laudantium ipsa, ad, quibusdam quaerat
        saepe natus. Recusandae excepturi facilis debitis alias omnis rem optio
        beatae. Ea voluptates assumenda veritatis corrupti ex! Aliquid soluta
        accusamus possimus molestias nesciunt, illum labore fugiat blanditiis
        vel enim incidunt porro minima vitae itaque nemo impedit voluptas,
        assumenda explicabo dolorum modi sapiente, non magnam ad voluptate?
        Autem eius id harum nisi temporibus veritatis. Nesciunt assumenda, nulla
        excepturi suscipit autem est facilis debitis ratione ut ab fugit
        sapiente esse laborum id exercitationem, dolores eveniet voluptas quia
        nam consectetur hic unde? Id, aut. Sit fuga enim perferendis voluptate,
        amet quidem id mollitia sunt temporibus. Ipsa inventore explicabo
        laborum, saepe eos et architecto obcaecati. Laudantium, consequatur.
        Tenetur blanditiis enim dolorem quia, repudiandae, sit veniam
        accusantium molestiae quos commodi tempora consectetur beatae cum eius
        repellat suscipit cumque fuga culpa eos, et voluptate modi omnis iusto.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
