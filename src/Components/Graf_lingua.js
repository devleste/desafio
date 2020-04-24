import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import {
    PieChart,
    Pie,
    Tooltip,
} from 'recharts';

export default class Graf_lingua extends Component {
    
    state = {
        persons: [],
    }

    componentDidMount() {
        //axios.get('http://localhost:3000/usuarios.json')
        axios.get('https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060')
            .then( res => {
                console.log(res);
                this.setState({ persons: res.data });                
            });
    }

    render() {
        var mapa = this.state.persons;
        
        var idioma = [];
        mapa.forEach(function (mapas) {
            idioma.push(mapas.language);
        });

        var result = _(mapa)
            .groupBy('language')
            .map((v, language) => ({
                language,
                count: _.map(v, 'language')
            }))
            .value();
        
        var result2 = _(mapa)
            .groupBy('gender')
            .map((v, gender) => ({
                gender,
                count: _.map(v, 'gender')
            }))
            .value();
        
        const data01 = result.map(item => {
            return {
                name: item.language,
                value: item.count.length
            };
        });
    
        const data02 = result2.map(item => {
            return {
                name: item.gender,
                value: item.count.length
            };
        });


        return (
            <div>
                <table>
                    <thead>
                        <th>Genero</th>
                    </thead>
                    <tr>
                        <td>
                            <PieChart width={200} height={200}>
                                <Pie dataKey="value" data={data02} namekey="gender" cx={100} cy={100} outerRadius={60} fill="#8884d8" label />
                                <Tooltip />
                            </PieChart>
                        </td>
                    </tr>
                </table>
                <table>
                    <thead>
                        <th>Idioma</th>
                    </thead>
                    <tr>
                        <td>
                            <PieChart width={200} height={200}>
                                <Pie dataKey="value" data={data01} namekey="language" cx={100} cy={100} outerRadius={60} fill="#FF94d0" label />
                                <Tooltip />
                            </PieChart>
                        </td>
                    </tr>
                    
                </table>
            </div>
        );
    }
}
