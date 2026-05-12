import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Management } from '../basic-setup/models/Management';
import { ManagementService } from '../basic-setup/service/Management.service';
import { ConfirmService } from 'src/app/core/service/confirm.service';
import { Router } from '@angular/router';
import { MasterData } from 'src/assets/data/master-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

interface BoardMember {
  id: string;
  name: string;
  designation: string;
  company: string;
  img: string;
  bio: string;
}

@Component({
  selector: 'app-our-management',
  templateUrl: './our-management.component.html',
  styleUrls: ['./our-management.component.scss']
})
export class OurManagementComponent implements OnInit {
  photoBaseUrl = environment.fileUrl;
  masterData = MasterData;
  ELEMENT_DATA: Management[] = [];
  isLoading = false;

  paging = {
    pageIndex: this.masterData.paging.pageIndex,
    pageSize: 50,
    length: 1
  }
  searchText = "";
  permission: any;
  displayedColumns: string[] = ['sl', 'fullName', 'shortName', 'actions'];
  dataSource: MatTableDataSource<Management> = new MatTableDataSource();

  selection = new SelectionModel<Management>(true, []);


  constructor(private snackBar: MatSnackBar, private ManagementService: ManagementService, private router: Router, private confirmService: ConfirmService) { }

  ngOnInit() {
    this.getManagements();
  }

  getManagements() {
    this.isLoading = true;
    this.ManagementService.getManagements(this.paging.pageIndex, this.paging.pageSize, this.searchText).subscribe(response => {

      this.dataSource.data = response.items;
      this.permission = response.permission;
      this.paging.length = response.totalItemsCount
      this.isLoading = false;
      console.log('Award data', this.dataSource.data);
    })
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.filteredData.forEach((row) =>
        this.selection.select(row)
      );
  }
  addNew() {

  }

  pageChanged(event: PageEvent) {
    this.paging.pageIndex = event.pageIndex
    this.paging.pageSize = event.pageSize
    this.paging.pageIndex = this.paging.pageIndex + 1
    this.getManagements();
  }

  applyFilter(searchText: any) {
    this.searchText = searchText;
    this.getManagements();
  }

  getEmployeeImage(path: string): string {
    if (!path) return 'assets/no-image.png'; // fallback
    return this.photoBaseUrl + path;
  }
  // // Default selection
  // selectedMember: BoardMember | null = null;

  // // Data List (Ordered as per SSG hierarchy usually, or based on your list)
  // members: BoardMember[] = [
  //   {
  //     id: 'joynal',
  //     name: 'Md. Joynal Abedin',
  //     designation: 'BOARD ADVISOR',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/joynal.jpg',
  //     bio: `At a time when global uncertainty continues to challenge manufacturing organizations, Super Star Group achieved strong results for shareholders, customers, employees, and the communities we serve. Our culture has been a key source of ongoing strength and stability during these turbulent times. Protecting, maintaining and reinforcing this culture is a shared responsibility and one that everyone at Super Star Group takes seriously.`
  //   },
  //   {
  //     id: 'mohiuddin',
  //     name: 'Md. Mohiuddin',
  //     designation: 'VICE CHAIRMAN',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/mohiuddin.jpg',
  //     bio: `I am so grateful to all the employees for their dedication, loyalty and hard work which have resulted in good growth, increased market share and efficient operations. These operations derive from the Board as well as from the Shareowners. Dear Shareowners, running a conglomerate is a complex task and we are fortunate that our key people have the ability to handle the diversity with precision and confidence.`
  //   },
  //   {
  //     id: 'ibrahim',
  //     name: 'Mohammed Ibrahim',
  //     designation: 'FOUNDER LATE CHAIRMAN',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/ibrahim.jpg',
  //     bio: `The delegation of authority, humble leadership, vigilant management and persistence in quality, are the core pillars of Group's success. Maintaining quality and state-of-the-art manufacturing, Super Star Group has emerged as one of the largest manufacturers in the field of Electrical and Electronics.`
  //   },
  //   {
  //     id: 'harun',
  //     name: 'Md. Harun Ar Rashid',
  //     designation: 'MANAGING DIRECTOR',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/harun.jpg',
  //     bio: `I take this opportunity to thank our valued customers, whose continued patronage and confidence in our products inspires us to extend the best of services and enables us to provide value for their money. We believe that technology holds the key to safety, energy security, and economic growth.`
  //   },
  //   {
  //     id: 'jalal',
  //     name: 'Md. Jalal Uddin',
  //     designation: 'CHAIRMAN',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/jalal.jpg',
  //     bio: `I am pleased to welcome you to the Super Star Group website. Whether you're a potential customer with a challenging project ahead, an existing customer checking up on our latest news, or a partner, supplier or future employee looking for new opportunities, I trust you'll find what you're looking for here.`
  //   },
  //   {
  //     id: 'mahabubur',
  //     name: 'Md. Mahabubur Rahman',
  //     designation: 'DEPUTY MANAGING DIRECTOR - SCM',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/mahabubur.jpg',
  //     bio: `Our philosophy is simple, 'Client First'. One of the core values that we have and that drives all of our actions is to grow and move forwards by providing the best solution for our customers. We have a clear objective: to ensure a business model so unique and precise that over time the earning of it will not only be monetary but also aesthetic to the macro level.`
  //   },
  //   {
  //     id: 'sadi',
  //     name: 'Sheikh Sadi Abdul Mojid',
  //     designation: 'DEPUTY MANAGING DIRECTOR',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/sadi.jpg',
  //     bio: `Being with a company that has its origin is more than 25 years old, I feel very privileged to be writing this message as one of board of directors. This is a special time in our company's history as we have reached its silver jubilee. We began our journey in 1994, and have spent the past two decades continuing to build our brand.`
  //   },
  //   {
  //     id: 'tofael',
  //     name: 'Md. Tofael Ahmed',
  //     designation: 'ADDITIONAL MANAGING DIRECTOR',
  //     company: 'Sharif Industrial Co.Ltd.',
  //     img: 'assets/images/tofael.jpg',
  //     bio: `Super Star Group, a multi-disciplinary multi business company, has established itself to be a dynamic and progressive enterprise, placing itself as one of the leading privately-owned group of companies in Bangladesh since the inception in 1994. As a result of our prudent approach, we have grown steadily.`
  //   }
  // ];

  // constructor() { }

  // ngOnInit(): void {
  //   // Select the first member by default
  //   if (this.members.length > 0) {
  //     this.selectedMember = this.members[0];
  //   }
  // }

  // selectMember(member: BoardMember) {
  //   this.selectedMember = member;
  // }
}