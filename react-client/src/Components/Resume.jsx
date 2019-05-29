import React, { Component } from 'react';
import { Document } from 'react-pdf';

class Resume extends Component {
    //To be fixed
    render() {
        return(
            <div style={{ width: 600 }}>
                <Document file='/alex_santamaura_website.pdf'>
                </Document>
            </div>
        )
    }
}

export default Resume;