import {Component, EventEmitter, Output} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public categoryProvider: CategoryProvider) {
    this.items = [];
    this.categories = <Array<Category>> new Array();
    this.categoryProvider.getCategories().subscribe( value => {
      // console.log(value);
      this.items = value;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCategoryPage');
  }

  public closeModal(){
    this.viewController.dismiss();
  }

  public closeAndAcceptModal() {
    this.viewController.dismiss(this.categories);
  }

  public addThisCategory(category: Category) {
    this.categories.push(category);
  }
}
