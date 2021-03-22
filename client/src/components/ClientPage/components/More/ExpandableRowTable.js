import React from "react";
import MUIDataTable from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { TableItem } from "./TableItem";
import GetAppIcon from "@material-ui/icons/GetApp";
import PrintIcon from "@material-ui/icons/Print";

const useStyles = makeStyles({
  table: {
    borderRadius: '20px',
    marginBottom: "20px"
  },
  root: {
    height: '100%',
    width: "100%",
  },

});

const ExpandableRowTable = () => {
  const classes = useStyles();
  const columns = [
    {
      name: "ID"
    },
    {
      name: "Дата"
    },
    {
      name: "Локацiя"
    },
    {
      name: "Дохiд"
    },
    {
      name: "Витрати"
    },
    {
      name: ""
    },
    {
      name: ""
    },
  ];
  let i = 0;
  const data = [
    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],

    // eslint-disable-next-line react/jsx-key
    [i++, "12.03.2019 - 11.04 2019", "Яблуниця, Івано-Франківськ", "20.554", "3.567", (<GetAppIcon style={{ color: '#254A93' }}/>), <PrintIcon style={{ color: '#254A93' }}/>],
  ];

  const options = {
    filter: true,
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    selectableRows: "single",
    viewColumns:false,
    filterType: "dropdown",
    responsive: "scrollMaxHeight",
    rowsPerPage: 5,
    expandableRows: true,
    renderExpandableRow: (rowData, rowMeta) => {
      console.log(rowData, rowMeta);
      return (
        <React.Fragment>
          <tr>
            <td colSpan={8}>
              <TableContainer component={Paper}>
                <Table style={{ minWidth: "650" }} aria-label="simple table">
                  <TableHead>
                    <TableItem/>
                  </TableHead>
                </Table>
              </TableContainer>
            </td>
          </tr>
        </React.Fragment>
      );
    },
    page: 1
  };

  return (
    <MUIDataTable
      className={classes.table}
      title={''}
      data={data}
      columns={columns}
      options={options}
      draggableColumns={true}
    />
  );
};

export default ExpandableRowTable;
