<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class CategoryMixin extends Vue {
  public generateId(): string {
    let result: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength: number = characters.length;
    let counter = 0;
    while (counter < 30) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  public getPathFromTitle(title: string):string {
    return title.toLowerCase().replace(/\s/g, '_');
  }
}
</script>
