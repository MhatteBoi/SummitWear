import { Component } from '@angular/core';
import { ProductService, Product } from '../../../../services/productService/product-service.service';

@Component({
    selector: 'app-product-manage',
    templateUrl: './product-manage.component.html',
    styleUrls: ['./product-manage.component.css'],
    standalone: false
})
export class ProductManageComponent {

  constructor(private productService: ProductService) { }

  products: Product[] = [];
  // Control visibility of the edit card
  isEditCardVisible: boolean = false;

  // Store the selected product to edit
  selectedProduct: Product | null = null;

  // Show the edit card and pass the selected product
  openEditCard(product: Product): void {
    this.selectedProduct = { ...product }; // Create a copy to avoid direct mutation
    this.isEditCardVisible = true;
  }

  // Close the edit card
  closeEditCard(): void {
    this.isEditCardVisible = false;
    this.selectedProduct = null;  // Optionally reset the selected product
  }

  get filteredJackets() {
    return this.products.filter(p => p.categoryType?.toLowerCase() === 'jacket'.toLowerCase());
  }
  get filteredBoots() {
    return this.products.filter(p => p.categoryType?.toLowerCase() === 'boots'.toLowerCase());
  }
  get filteredPants() {
    return this.products.filter(p => p.categoryType?.toLowerCase() === 'pants'.toLowerCase());
  }
  private visibleCategories: Set<string> = new Set();

  // Temporary object when adding a new product
  newProduct: Product = {
    productId: 0,
    name: '',
    price: 0,
    description:'',
    stock: 0,
    images: [{ url: '' }],  
    categoryId: 0,
    categoryType:''
  };

  categories: { categoryId: number; type: string; season: string }[] = [];

  // Toggle visibility for each category
  toggleCategory(categoryId: string): void {
    if (this.visibleCategories.has(categoryId)) {
      this.visibleCategories.delete(categoryId);
    } else {
      this.visibleCategories.add(categoryId);
    }
  }

  isCategoryVisible(categoryId: string): boolean {
    return this.visibleCategories.has(categoryId);
  }

  ngOnInit() {
    this.loadProducts();
    this.loadCategories(); 
  }

  loadCategories() {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
      console.log('Loaded categories:', this.categories);
    });
  }

   loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log('Loaded products:', this.products); 
    });
  }
  // we are working on this right now lissom
  addProduct(): void {
    // Make sure all required fields are populated
    if (this.newProduct.name && this.newProduct.price && this.newProduct.stock && this.newProduct.categoryId) {
      // If description is optional, set a default value if it's empty
      this.newProduct.description = this.newProduct.description || 'No description provided';
      console.log('Sending data:', this.newProduct);
      // Call your service to add the product
      this.productService.addProduct(this.newProduct).subscribe((createdProduct) => {
        // Add the newly created product to the list of products
        this.products.push(createdProduct);

        // Reset the form after adding the product
        this.resetNewProduct();
      });
    } else {
      console.error('Please fill all required fields. Data sent:' );
    }
  }

  deleteProduct(productId: number, productName: string): void {
    const confirmed = window.confirm(`Are you sure you want to delete "${productName}"?`);

    if (confirmed) {
      this.productService.deleteProduct(productId).subscribe(() => {
        console.log(`Product "${productName}" deleted successfully.`);
        this.products = this.products.filter(p => p.productId !== productId);
      });
    }
  }

  updateProduct(updatedProduct: Product): void {
    if (!updatedProduct.productId) {
      console.error('Product ID is not defined');
      return;
    }

    // Find the category based on the new categoryId
    const updatedCategory = this.categories.find(c => c.categoryId === updatedProduct.categoryId);

    // Update categoryType so that filtering updates properly
    if (updatedCategory) {
      updatedProduct.categoryType = updatedCategory.type;
    }

    const index = this.products.findIndex(p => p.productId === updatedProduct.productId);
    if (index !== -1) {
      this.products[index] = { ...updatedProduct };
    }


    this.productService.updateProduct(updatedProduct.productId, updatedProduct).subscribe(() => {
      this.closeEditCard();
      this.loadProducts(); // Refresh product list
    });
 
  }

  // Might be redundant
  closeEdit(): void {
    this.closeEditCard();
    this.isEditCardVisible = false;
    this.selectedProduct = null;
  }

  // Resets the fields when added a new product 
  private resetNewProduct(): void {
    this.newProduct = {
      productId: 0,
      name: '',
      price: 0,
      stock: 0,
      description: '',
      images: [{ url: '' }],
      categoryId: 0,
      categoryType: '' // Add this line
    };
  }
  }

