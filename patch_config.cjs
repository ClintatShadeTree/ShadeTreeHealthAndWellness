const fs = require('fs');
const dataPath = 'public/admin/config.yml';
let data = fs.readFileSync(dataPath, 'utf8');

const replacement = `          - {label: "Services", name: "services", widget: "object", fields: [
              {label: "Heading", name: "heading", widget: "string"},
              {label: "Subtitle", name: "subtitle", widget: "string"},
              {label: "Description", name: "description", widget: "text"},
              {label: "Who We Serve", name: "whoWeServe", widget: "list", field: {label: "Group", name: "group", widget: "string"}},
              {label: "Memberships", name: "memberships", widget: "list", fields: [
                {label: "Title", name: "title", widget: "string"},
                {label: "Price", name: "price", widget: "string"},
                {label: "Subtitle", name: "subtitle", widget: "string"},
                {label: "Description", name: "description", widget: "text"},
                {label: "Features", name: "features", widget: "list", field: {label: "Feature", name: "feature", widget: "string"}},
                {label: "Perfect For", name: "perfectFor", widget: "text"}
              ]},
              {label: "Packages", name: "packages", widget: "list", fields: [`;

data = data.replace(/          - {label: "Services", name: "services", widget: "object", fields: \[\n              {label: "Heading", name: "heading", widget: "string"},\n              {label: "Subtitle", name: "subtitle", widget: "string"},\n              {label: "Who We Serve", name: "whoWeServe", widget: "list", field: {label: "Group", name: "group", widget: "string"}},\n              {label: "Packages", name: "packages", widget: "list", fields: \[/g, replacement);

fs.writeFileSync(dataPath, data);
