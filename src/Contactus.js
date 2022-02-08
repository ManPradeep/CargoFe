import { Note } from '@react-pdf/renderer';
import React, { Component } from 'react';
import './home.css';

export default class Contactus extends Component {
  render() {
    return (
        <div className='cover'>
            <br/><br/><br/>
      <table>
<thead>
    <th colspan="5" className='th1'>Contact Information</th>
<tr>
<th>S.N.</th>
<th>Name</th>
<th>Role</th>
<th>eMail</th>
<th>Contact No</th>
</tr>
</thead>
<tr>
<td>1.</td>
<td>Sumit Sinha</td>
<td>GM</td>
<td><a href="mailto:sumitsinha@aptaracorp.com">sumitsinha@aptaracorp.com</a></td>
<td>+91&#x00A0;7065542121</td>
</tr>
<tr>
<td>2.</td>
<td>Sachin Goel</td>
<td>Manager</td>
<td><a href="mailto:Sachin.Goel@aptaracorp.com">Sachin.Goel@aptaracorp.com</a></td>
<td>+91&#x00A0;9678198897</td>
</tr>
<tr>
<td>3.</td>
<td>Prem Ekta</td>
<td>Manager</td>
<td><a href="mailto:pekka@aptaracorp.com">pekka@aptaracorp.com</a></td>
<td>+91&#x00A0;9871310746</td>
</tr>
<tr>
<td>4.</td>
<td>Pradeep Maurya</td>
<td>Production Supervisor</td>
<td><a href="mailto:digvijay@aptaracorp.com">digvijay@aptaracorp.com</a></td>
<td>+91&#x00A0;9015605692</td>
</tr>
<tr>
<td>5.</td>
<td>Tanveer Hayat</td>
<td>Production Supervisor</td>
<td><a href="mailto:tanveer.hayat@aptaracorp.com">tanveer.hayat@aptaracorp.com</a></td>
<td>+91&#x00A0;9899237886</td>
</tr>
</table>
<br/><br/><br/>
<Note><marquee><span>For any technical inhancement/suggesion please contact to Pradeep Maurya at <a href="mailto:crgfe.apt@gmail.com">crgfe.apt@gmail.com</a>.</span></marquee></Note>
</div>
    );
  }
}

