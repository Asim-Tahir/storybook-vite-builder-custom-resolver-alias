import HelloWorld from "@/components/HelloWorld.vue";

export default {
  title: 'HelloWorld',
  component: HelloWorld,
  argTypes: {
    onClick: {},
  },
};

export const HelloWorldTemplate = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HelloWorld },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<hello-world v-bind="args" />',
});