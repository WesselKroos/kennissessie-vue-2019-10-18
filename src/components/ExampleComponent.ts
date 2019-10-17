import { Component, Prop, Vue } from 'vue-property-decorator';

//Todo: Add props in component decorator?
@Component
export default class ExampleComponent extends Vue {
  @Prop({ default: () => [] })
  private frameworks!: string[];
  private allItemsShown = false;

  showAllItems() {
    this.allItemsShown = !this.allItemsShown;
  }

  get visibleFrameworks () {
    return this.frameworks.sort().filter((framework, i) => (this.allItemsShown || (!this.allItemsShown && i < 5)));
  }
}