import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Category} from "../../models/category";
import {CategoryProvider} from "../../providers/category/category";

/**
 * Generated class for the AddCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
})
export class AddCategoryPage {

  items: Category[];
  categories: Category[];
  categoryAlreadyChecked: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public categoryProvider: CategoryProvider) {
    this.items = [];
    this.categories = <Array<Category>> new Array();
    this.categoryAlreadyChecked = [];
    this.categoryAlreadyChecked = this.navParams.get('categories');
    this.categoryProvider.getCategories().subscribe( value => {
      this.items = value;
      this.categoryAlreadyChecked.forEach(category => {
        this.items = this.items.filter(item => item.categoryId!==category.categoryId);
      })
    });
  }

  ionViewDidLoad() {
  }

  public closeModal(){
    this.viewController.dismiss();
  }

  public closeAndAcceptModal() {
    this.viewController.dismiss(this.categories);
  }

  public addThisCategory(category: Category) {
    if (this.categories.includes(category)) {
      this.categories = this.categories.filter(categoryOfList => categoryOfList!==category);
    } else {
      this.categories.push(category);
    }
  }
}
