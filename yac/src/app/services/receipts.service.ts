import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { AuthService } from '../auth.service';
import { Receipt } from '../models/receipt.dto';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {
  private readonly apiUrl: string;
  receipts: any;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.apiUrl;
  }

  // Fetches all available receipts
  loadAllReceipts(): Observable<any[]> {
    const headers = {
      Authorization: `Bearer ${AuthService.accessToken}`  // Use accessToken from AuthService
    };
    return this.http.get<any>(this.apiUrl + '/receipts/withFilters');
  }

  //Fetches the receipts and available filters
  fetchReceiptListbyParameters(periodId: number, merchantName: string, currencyCode: string, labelId: number): Observable<any[]> {
    const headers = {
      Authorization: `Bearer ${AuthService.accessToken}`  // Use accessToken from AuthService
    };
    const httpParams = new HttpParams({
      fromObject: {
        pg_number:'',
        pageSize:'',
        periodId: periodId,
        merchantName: merchantName,
        currency: currencyCode,
        labelId: labelId,
        dateFrom:'',
        dateTo:''
      }
    });
    return this.http.get<any>(this.apiUrl + '/receipts', { params: httpParams });
  }

  //get PreSignedUrl
  getPreSignedUrl(receiptId: number): Observable<any> {
    const headers = {
      Authorization: `Bearer ${AuthService.accessToken}`  // Use accessToken from AuthService
    };
    return this.http.get<any>(this.apiUrl + '/receipts/'+{receiptId}+'/attachmentUrl');
  }

}
