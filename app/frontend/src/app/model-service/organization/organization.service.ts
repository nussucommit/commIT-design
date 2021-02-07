import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private baseUrlOrganization = 'http://localhost:8000/api/organization';

  constructor(private http: HttpClient) { }

  getOrganizationList(): Observable<any> {
    return this.http.get(`${this.baseUrlOrganization}`);
  }

  getOrganizationById(id: number): Observable<object> {
    return this.http.get(`${this.baseUrlOrganization}/${id}`);
  }

  createOeganization(organization: any): Observable<object> {
    return this.http.post(`${this.baseUrlOrganization}`, organization);
  }
  
  updateOrganization(id: number, organization: any): Observable<object> {
    return this.http.put(`${this.baseUrlOrganization}/${id}`, organization);
  }

  deleteOrganization(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlOrganization}/${id}`);
  }

  deleteAllOrganization(): Observable<any> {
    return this.http.delete(`${this.baseUrlOrganization}`);
  }
}
