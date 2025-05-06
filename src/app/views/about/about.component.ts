import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="max-w-3xl mx-auto space-y-6">
      <h1 class="text-3xl font-bold">About PIC</h1>
      
      <div class="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 class="text-xl font-semibold">Product Information Center</h2>
        <p class="text-gray-600">
          The Product Information Center (PIC) is a centralized platform for managing and maintaining product information across the organization. 
          It provides tools and features to help teams efficiently manage product data, specifications, and documentation.
        </p>

        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-3">Key Features</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li>Product Catalog Management</li>
            <li>Specification Tracking</li>
            <li>Document Version Control</li>
            <li>Product Data Analytics</li>
            <li>Team Collaboration Tools</li>
          </ul>
        </div>

        <div class="mt-6">
          <h3 class="text-lg font-semibold mb-3">Version Information</h3>
          <p class="text-gray-600">Version 1.0.0</p>
          <p class="text-gray-600">© 2024 Product Information Center</p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {} 