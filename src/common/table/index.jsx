import React, { Component } from 'react';
import Action from './action';
import Message from './message';
import Loading from '../loading';

export default class Table extends Component {
  
  render() {
    const { rows, loading } = this.props;
    if (loading)
      return <Loading />;

    if (!rows || !rows.length) 
      return <Message message={ this.props.emptyMessage || 'Nenhum registro encontrado' } />;

    return (
      <table className="table table-bordered table-hover">
        <thead>
          { this.getColumnHeaders() }
        </thead>
        <tbody>
          { this.getRowValues() }
        </tbody>
      </table>
    );
  }
  
  getColumnHeaders() {
    const { columns, flexAction } = this.props;
    if (!columns || !Array.isArray(columns)) return false;
    const heads = columns.map(c => 
      <th 
        key={ c.prop } 
        style={ { width: c.flex ? `${c.flex}%` : '' } }
      >
      { c.label }
      </th>
    );
    if (this.hasActions()) heads.push(<th key="actions" style={ { width: `${flexAction || 2 }%` } }>Ações</th>);
    return <tr>{ heads }</tr>;
  }

  getColumnValues(row, index) {
    const { columns, rowClick } = this.props;
    if (!columns || !Array.isArray(columns)) return false;
    return columns.map(c => {
      const raw = row[c.prop];
      const { format, template } = c;
      const Template = template;
      const text = format ? format(raw) : raw;
      const content = template ? <Template row={ row } index={ index } column={ c } text={ text } /> : text;
      return (
        <td key={ c.prop } onClick={ () => rowClick ? rowClick(row) : false }>{ content }</td>
      );
    });
  }

  getActionValues(row, index) {
    if (!this.hasActions()) return false;
    const { actions } = this.props;
    return (
      <td>
        { actions.map(a => <Action 
            key={ a.icon || a.title } 
            color={ a.color }
            icon={ a.icon } title={ a.title } 
            onClick={ () => a.click(row, index) }
          />
          ) 
        }
      </td>
    );
  }

  hasActions() {
    const { actions } = this.props;
    return actions && Array.isArray(actions);
  }

  getRowValues() {
    const { rows, rowClick } = this.props;
    if (!rows || !Array.isArray(rows)) return false;
    return rows.map((r, i) => (
      <tr key={ r._id || i } style={ { cursor: rowClick ? 'pointer' : 'default' } }>
        { this.getColumnValues(r, i) }
        { this.getActionValues(r, i) }
      </tr>
    ));
  }
}
