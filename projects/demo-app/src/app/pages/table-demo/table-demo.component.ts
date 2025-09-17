import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, Column, ToastService } from 'ng-daisy-ui-components';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

@Component({
  selector: 'app-table-demo',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './table-demo.component.html',
  styles: [],
})
export class TableDemoComponent {
  constructor(private toastService: ToastService) {}
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'active',
      joinDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      status: 'active',
      joinDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'Editor',
      status: 'inactive',
      joinDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@example.com',
      role: 'User',
      status: 'active',
      joinDate: '2023-04-05',
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@example.com',
      role: 'Admin',
      status: 'active',
      joinDate: '2023-05-12',
    },
  ];

  columns: Column<User>[] = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (row: User) => row.id.toString(),
      isSortable: true,
      width: 80,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (row: User) => row.name,
      isSortable: true,
      width: 200,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (row: User) => row.email,
      isSortable: true,
      width: 250,
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (row: User) => row.role,
      isSortable: true,
      width: 120,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (row: User) => row.status,
      isSortable: true,
      width: 100,
    },
    {
      columnDef: 'joinDate',
      header: 'Join Date',
      cell: (row: User) => new Date(row.joinDate).toLocaleDateString(),
      isSortable: true,
      width: 120,
    },
  ];

  currentPage = 1;
  pageSize = 10;
  totalCount = this.users.length;

  onSortChange(columns: Column<User>[]) {
    const sortedColumn = columns.find(c => c.sort);
    this.toastService.showSuccess(
      'Sort changed: ' + sortedColumn?.header + ' ' + sortedColumn?.sort
    );
  }

  onRowClick(user: User) {
    this.toastService.showSuccess('Row clicked: ' + user.name);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.toastService.showSuccess('Page changed to: ' + page);
  }
}
