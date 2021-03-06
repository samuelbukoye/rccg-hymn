import { Component, OnInit } from '@angular/core';
import { HymnService } from './shared/hymn.service';
import { faList, faTh, faFilter } from '@fortawesome/free-solid-svg-icons';
import { IHymn } from './shared/hymn';

@Component({
  selector: 'hymn-list',
  templateUrl: "./hymn-list.component.html",
  styleUrls: [`hymn-list.component.css`]
})

export class HymnListComponent implements OnInit {
  faList = faList
  faTh = faTh
  faFilter=faFilter
  filteredHymns: IHymn[]
  
  constructor(
    private hymnService : HymnService
    ){}
  ngOnInit(){
    this.hymns = this.hymnService.getHymns()
    this.filteredHymns = this.hymns
  }
  grid:boolean = false 
  category:boolean = false
  private _hymnListFilter:string

  get hymnListFilter():string{
    return this._hymnListFilter
  }
  set hymnListFilter(value){
     this._hymnListFilter = value
     this.filteredHymns = this.hymnListFilter ? this.performFilter(this.hymnListFilter) : this.hymns;
  }
  hymns: IHymn[]
  

  gridSwitcher(): void {
    this.grid = !this.grid
  }

  categorySwitcher(): void {
    this.category = !this.category
  }

  performFilter(filterBy: string){
    filterBy = filterBy.toLowerCase()
    
    const hymnStanzardChecker=(hymn: string[][])=>{
      return(hymn.some(verse=>{
        return(verse.some(line=>{
          return line.toLowerCase().indexOf(filterBy) !== -1
        }))
      }))
    }
    const hymnChorusChecker=(chorus: string[])=>{
      if(!chorus)return false
      return(chorus.some(line=>{
        return line.toLowerCase().indexOf(filterBy) !== -1
      }))
    }

    return this.hymns.filter((hymn)=>
        (
          hymn.title.toLowerCase().indexOf(filterBy)!== -1 || hymn.hymnNo.indexOf(filterBy)!== -1 || hymn.category.toLowerCase().indexOf(filterBy)!== -1 || hymnStanzardChecker(hymn.hymnStanzards) || hymnChorusChecker(hymn.hymnChorus)
        )
      )
  }
}