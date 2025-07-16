
// Inisialisasi DataTables dengan data dari JSON
function initProductsTable() {
  // JSON data
  const productData = [
    {
      name: "Wireless Mouse",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Ergonomic wireless mouse with 2.4GHz connection.",
      category: "Electronics",
      price: "$15.99",
      stock: 25
    },
    {
      name: "Notebook A5",
      image: "https://images.unsplash.com/photo-1581431886211-6b932f8367f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdGVib29rfGVufDB8fDB8fHww",
      description: "Hardcover ruled notebook, 100 sheets.",
      category: "Stationery",
      price: "$3.50",
      stock: 100
    },
    {
      name: "USB-C Charger",
      image: "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzYiUyMGMlMjBjaGFyZ2VyfGVufDB8fDB8fHww",
      description: "Fast charging adapter for USB-C devices.",
      category: "Electronics",
      price: "$12.00",
      stock: 50
    },
    {
      name: "Ceramic Mug",
      image: "https://images.unsplash.com/photo-1495100497150-fe209c585f50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyYW1pYyUyMG11Z3xlbnwwfHwwfHx8MA%3D%3D",
      description: "350ml white ceramic mug, microwave safe.",
      category: "Home",
      price: "$4.99",
      stock: 40
    },
    {
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Portable speaker with 10h battery life.",
      category: "Electronics",
      price: "$29.90",
      stock: 15
    },
    {
      name: "Desk Lamp",
      image: "https://images.unsplash.com/photo-1744754405566-c14f63d820f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxkZXNrJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D",
      description: "LED lamp with adjustable brightness.",
      category: "Home",
      price: "$18.00",
      stock: 30
    },
    {
      name: "Ballpoint Pen Set",
      image: "https://images.unsplash.com/photo-1448471237638-f8ccc7d5ac9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGJhbGxwb2ludCUyMHBlbiUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Set of 10 smooth-writing pens.",
      category: "Stationery",
      price: "$6.99",
      stock: 200
    },
    {
      name: "Gaming Keyboard",
      image: "https://images.unsplash.com/photo-1637870995624-692d2e95b5dd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Mechanical RGB keyboard with blue switches.",
      category: "Electronics",
      price: "$45.00",
      stock: 20
    }
  ];
  $('#products-table').DataTable({
    
    data: productData,
    responsive: true,
    language: {
      search: "",
      searchPlaceholder: "Search...",
    },
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          return meta.row + 1; // No.
        }
      },
      { data: 'name' },
      {
        data: 'image',
        render: function (data) {
          return `<img src="${data}" alt="Product Image" width="60">`;
        }
      },
      { data: 'description', className: 'description',
        render: function (data) {
          return `<span>${data}</span>`;
        }
       },
      { data: 'category' },
      { data: 'price' },
      { data: 'stock' },
      {
        data: null,
        className: 'actions',
        render: function () {
          return `
          <span>
            <button class="btn-show"><i class="fas fa-eye"></i></button>
            <button class="btn-edit"><i class="fas fa-edit"></i></button>
            <button class="btn-delete"><i class="fas fa-trash"></i></button>
          </span>
          `;
        }
      }
    ]
  });  
};

function initOrdersTable() {
  const ordersData = [
    {
      order_id: '#ORD001',
      customer_name: 'Rizky Andrian',
      order_date: '2025-07-10',
      total: '$120.00',
      status: 'Completed'
    },
    {
      order_id: '#ORD002',
      customer_name: 'Larissa Beatrice',
      order_date: '2025-07-11',
      total: '$89.50',
      status: 'Pending'
    },
    {
      order_id: '#ORD003',
      customer_name: 'Dewi Ayu',
      order_date: '2025-07-12',
      total: '$42.75',
      status: 'Cancelled'
    }
  ];

  $('#orders-table').DataTable({
    data: ordersData,
    responsive: true,
    language: {
      search: "",
      searchPlaceholder: "Search...",
    },
    columns: [
      {
        data: null,
        className: 'text-center',
        render: (data, type, row, meta) => meta.row + 1
      },
      { data: 'order_id' },
      { data: 'customer_name'},
      { data: 'order_date'},
      { data: 'total'},
      {
        data: 'status',
        className: 'status',
        render: (data) => {
          let badge = '';
          if (data === 'Completed') badge = 'completed';
          else if (data === 'Pending') badge = 'pending';
          else if (data === 'Cancelled') badge = 'cancelled';
          return `<span class="${badge}">${data}</span>`;
        }
      },
      {
        data: null,
        className: 'actions',
        render: () => `
        <span>
          <button class="btn-show"><i class="fas fa-eye"></i></button>
          <button class="btn-edit"><i class="fas fa-edit"></i></button>
          <button class="btn-delete"><i class="fas fa-trash"></i></button>
        </span>
        `
      }
    ]
  });
}

function initReportsTable() {
const reportData = [
  {
    id: 1,
    product: 'Wireless Mouse',
    category: 'Electronics',
    country: 'Indonesia',
    date: '2025-07-10',
    units_sold: 120,
    revenue: 1918.8,
    returns: 2
  },
  {
    id: 2,
    product: 'Notebook A5',
    category: 'Stationery',
    country: 'Singapore',
    date: '2025-07-11',
    units_sold: 240,
    revenue: 840.0,
    returns: 5
  },
  {
    id: 3,
    product: 'USB-C Charger',
    category: 'Electronics',
    country: 'Malaysia',
    date: '2025-07-12',
    units_sold: 90,
    revenue: 1080.0,
    returns: 0
  },
  {
    id: 4,
    product: 'Ceramic Mug',
    category: 'Home',
    country: 'Indonesia',
    date: '2025-07-12',
    units_sold: 75,
    revenue: 374.25,
    returns: 1
  },
  {
    id: 5,
    product: 'Bluetooth Speaker',
    category: 'Electronics',
    country: 'Philippines',
    date: '2025-07-13',
    units_sold: 30,
    revenue: 897.0,
    returns: 3
  },
  {
    id: 6,
    product: 'Desk Lamp',
    category: 'Home',
    country: 'Thailand',
    date: '2025-07-13',
    units_sold: 50,
    revenue: 900.0,
    returns: 2
  },
  {
    id: 7,
    product: 'Ballpoint Pen Set',
    category: 'Stationery',
    country: 'Indonesia',
    date: '2025-07-14',
    units_sold: 310,
    revenue: 2166.9,
    returns: 0
  }
];
const table = new DataTable('#report-table', {
      data: reportData,
    responsive: true,
    language: {
      search: "",
      searchPlaceholder: "Search...",
    },
    buttons: [
      {
        extend: 'pdfHtml5',
        text: 'Export PDF',
        title: 'Product Report',
        orientation: 'landscape',
        pageSize: 'A4',
        exportOptions: { columns: ':visible' }
      },
      {
        text: 'Export PNG',
        action: function () {
          html2canvas(document.querySelector("#report-table")).then(canvas => {
            const link = document.createElement('a');
            link.download = 'product-report.png';
            link.href = canvas.toDataURL();
            link.click();
          });
        }
      }
    ],
    columns: [
      { data: null, render: (_, __, ___, meta) => meta.row + 1, className: 'text-center' },
      { data: 'product' },
      { data: 'category' },
      { data: 'country' },
      { data: 'date', className: 'text-center' },
      { data: 'units_sold', className: 'text-right' },
      {
        data: 'revenue',
        className: 'text-right',
        render: (data) => `$${data.toFixed(2)}`
      },
      { data: 'returns', className: 'text-center' }
    ]
  });

  // Pindahkan tombol ke dalam .content-header
  table.buttons().container().appendTo('#export-buttons');
}

export { initProductsTable, initOrdersTable, initReportsTable };
