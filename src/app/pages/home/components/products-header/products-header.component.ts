import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountUpdated = new EventEmitter<number>();
  @Output() itemsCountUpdated = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = "sort";
  itemsShowCount = 12;
  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountUpdated.emit(count);
  }
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountUpdated.emit(colsNum);
  }
}
