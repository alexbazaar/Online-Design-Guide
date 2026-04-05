jest.unmock('./Table');
jest.unmock('./TableRow');
jest.unmock('./TableCell');
jest.unmock('./TableHeaderCell');
jest.unmock('./ArrayTableDataSource');

import React from 'react';
import { mount } from 'enzyme';

import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableHeaderCell from './TableHeaderCell';
import ArrayTableDataSource from './ArrayTableDataSource';
import tableStyles from "./Tables.scss";


describe('Tables', () => {

  let wrapper = null;
  const CAPTION_TEXT = "Test Caption";

  const data = [
    {
      title: 'Declaration of Independence',
      desc: 'Statement adopted by the Continental Congress declaring independence from the British Empire.',
      year: '1776'
    },
    {
      title: 'Bill of Rights',
      desc: 'The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.',
      year: '1791'
    },
    {
      title: 'Declaration of Sentiments',
      desc: 'A document written during the Seneca Falls Convention outlining the rights that American women should be entitled to as citizens.',
      year: '1848'
    }
  ];

  const defaultDataSource = new ArrayTableDataSource(data);
  defaultDataSource.addColumn({ title: "Document Title", field: "title", isRowHeader: true });
  defaultDataSource.addColumn({ title: "Description", field: "desc" });
  defaultDataSource.addColumn({ title: "Year", field: "year" });
  defaultDataSource.enableIndex();

  beforeEach(() => {
    // wrapper = mount(<Table caption={CAPTION_TEXT} />);
  });

  function tableWithDataSource({ delegate, dataSource=defaultDataSource, ...props } = {})
  {
    return mount(
      <Table caption={CAPTION_TEXT}
             dataSource={dataSource}
             delegate={delegate}
             {...props} />
    );
  }

  function tableWithExplicitChildren()
  {
    const rows = data.map((row, index) => {
      return (
        <TableRow key={`row-${index}`}>
          <TableHeaderCell>{row.title}</TableHeaderCell>
          <TableCell>{row.desc}</TableCell>
          <TableCell>{row.year}</TableCell>
        </TableRow>
      );
    });
    return mount(
      <Table caption={CAPTION_TEXT}>
        <thead>
          <tr>
            <TableHeaderCell>Document Title</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Year</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }

  it('is defined', () => {
    wrapper = mount(<Table caption={CAPTION_TEXT} />);
    expect(wrapper).toBeDefined();
  });

  it('is borderless by default', () => {
    wrapper = tableWithDataSource();
    expect(wrapper.find("table").hasClass(tableStyles['bordered'])).toBe(false);
  });

  it('has the "bordered" style if the bordered prop is set to "true"', () => {
    wrapper = tableWithDataSource({ bordered: true });
    expect(wrapper.find("table").hasClass(tableStyles['bordered'])).toBe(true);
  });

  it('renders the caption', () => {
    wrapper = tableWithDataSource();
    let captionElement = wrapper.find('caption');
    expect(captionElement.text()).toBe(CAPTION_TEXT);
    wrapper = tableWithExplicitChildren();
    captionElement = wrapper.find('caption');
    expect(captionElement.text()).toBe(CAPTION_TEXT);
  });

  it('renders column headers', () => {
    wrapper = tableWithDataSource();
    expect(wrapper.find('thead').find('th').length).toBe(defaultDataSource.numberOfColumns());
    wrapper = tableWithExplicitChildren();
    expect(wrapper.find('thead').find('th').length).toBe(defaultDataSource.numberOfColumns());
  });

  it('renders rows', () => {
    wrapper = tableWithDataSource();
    expect(wrapper.find('tbody').find('tr').length).toBe(defaultDataSource.numberOfRows());
    wrapper = tableWithExplicitChildren();
    expect(wrapper.find('tbody').find('tr').length).toBe(defaultDataSource.numberOfRows());
  });

  it('renders cells in rows', () => {
    wrapper = tableWithDataSource();
    expect(wrapper.find('tbody').find('td').length).toBe(
      defaultDataSource.numberOfRows() * (defaultDataSource.numberOfColumns() - 1));
    wrapper = tableWithExplicitChildren();
    expect(wrapper.find('tbody').find('td').length).toBe(
      defaultDataSource.numberOfRows() * (defaultDataSource.numberOfColumns() - 1));
  });

  it('renders headers in rows', () => {
    wrapper = tableWithDataSource();
    expect(wrapper.find('tbody').find('th').length).toBe(defaultDataSource.numberOfRows());
    wrapper = tableWithExplicitChildren();
    expect(wrapper.find('tbody').find('th').length).toBe(defaultDataSource.numberOfRows());
  });

  it('sorts column headers when using a data source', () => {
    wrapper = tableWithDataSource();
    // First check the initial state.
    let titles = data.map((row) => { return row.title });
    let renderedTitles = wrapper.find("tbody").find("th").map((th) => { return th.text() });
    expect(renderedTitles).toEqual(titles);
    // Now click on the Title column header.
    const titleColumn = wrapper.find("thead").find("TableHeaderCell").at(0);
    titleColumn.simulate("click");
    renderedTitles = wrapper.find("tbody").find("th").map((th) => { return th.text() });
    expect(renderedTitles).toEqual(titles.sort());
    // Click again to reverse the sort and check again.
    titleColumn.simulate("click");
    renderedTitles = wrapper.find("tbody").find("th").map((th) => { return th.text() });
    expect(renderedTitles).toEqual(titles.sort().reverse());
  });

  // it('filters the table results', () => {
  //   wrapper = tableWithDataSource();
  //   // Ensure we have the right number of initial rows.
  //   let rows = wrapper.find("tbody").find("tr");
  //   expect(rows.length).toEqual(defaultDataSource.numberOfRows());
  //   // Set the search term on the table.
  //   wrapper.find(Table).get(0).search("17");
  //   // Verify the number of rows is different.
  //   rows = wrapper.find("tbody").find("tr");
  //   expect(rows.length).toEqual(2);
  //   // Set the search term on the table.
  //   wrapper.find(Table).get(0).search("state");
  //   // Verify the number of rows is different.
  //   rows = wrapper.find("tbody").find("tr");
  //   expect(rows.length).toEqual(1);
  // });

});
