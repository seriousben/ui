/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  Product,
} from 'types/Plan';
import {
  Service,
} from 'types/Service';


export namespace Components {

  interface FeaturedService {
    'backgroundColor': string;
    'logo': string;
    'name': string;
    'shape': 'square' | 'circle';
  }
  interface FeaturedServiceAttributes extends StencilHTMLAttributes {
    'backgroundColor'?: string;
    'logo'?: string;
    'name'?: string;
    'shape'?: 'square' | 'circle';
  }

  interface ImageGallery {
    'images': string[];
    'title': string;
  }
  interface ImageGalleryAttributes extends StencilHTMLAttributes {
    'images'?: string[];
    'title'?: string;
  }

  interface ManifoldMarketplace {
    'serviceLink'?: string;
    'theme'?: 'light' | 'dark';
  }
  interface ManifoldMarketplaceAttributes extends StencilHTMLAttributes {
    'serviceLink'?: string;
    'theme'?: 'light' | 'dark';
  }

  interface MfButton {
    'id': string;
    'loading': boolean;
  }
  interface MfButtonAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'loading'?: boolean;
  }

  interface MfIcon {
    /**
    * a CSS variable starting with `--mf-c-*`
    */
    'color'?: string;
    /**
    * a CSS variable starting with `--mf-g-*`
    */
    'gradient'?: string;
    /**
    * The icon ID
    */
    'icon': string;
    'marginLeft': boolean;
    'marginRight': boolean;
    'title': string;
  }
  interface MfIconAttributes extends StencilHTMLAttributes {
    /**
    * a CSS variable starting with `--mf-c-*`
    */
    'color'?: string;
    /**
    * a CSS variable starting with `--mf-g-*`
    */
    'gradient'?: string;
    /**
    * The icon ID
    */
    'icon'?: string;
    'marginLeft'?: boolean;
    'marginRight'?: boolean;
    'title'?: string;
  }

  interface ProductDetails {
    'product': Product;
  }
  interface ProductDetailsAttributes extends StencilHTMLAttributes {
    'product'?: Product;
  }

  interface ProductPage {
    'label': string;
  }
  interface ProductPageAttributes extends StencilHTMLAttributes {
    'label'?: string;
  }

  interface ProductPlans {}
  interface ProductPlansAttributes extends StencilHTMLAttributes {}

  interface ProviderDetails {}
  interface ProviderDetailsAttributes extends StencilHTMLAttributes {}

  interface ServiceCard {
    'description'?: string;
    'isFeatured'?: boolean;
    'label'?: string;
    'logo'?: string;
    'name'?: string;
    'serviceLink'?: string;
  }
  interface ServiceCardAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'isFeatured'?: boolean;
    'label'?: string;
    'logo'?: string;
    'name'?: string;
    'serviceLink'?: string;
  }

  interface ServiceGrid {
    'featured'?: string;
    'serviceLink'?: string;
    'services'?: Service[];
    'themeColor': { [index: string]: string };
  }
  interface ServiceGridAttributes extends StencilHTMLAttributes {
    'featured'?: string;
    'serviceLink'?: string;
    'services'?: Service[];
    'themeColor'?: { [index: string]: string };
  }
}

declare global {
  interface StencilElementInterfaces {
    'FeaturedService': Components.FeaturedService;
    'ImageGallery': Components.ImageGallery;
    'ManifoldMarketplace': Components.ManifoldMarketplace;
    'MfButton': Components.MfButton;
    'MfIcon': Components.MfIcon;
    'ProductDetails': Components.ProductDetails;
    'ProductPage': Components.ProductPage;
    'ProductPlans': Components.ProductPlans;
    'ProviderDetails': Components.ProviderDetails;
    'ServiceCard': Components.ServiceCard;
    'ServiceGrid': Components.ServiceGrid;
  }

  interface StencilIntrinsicElements {
    'featured-service': Components.FeaturedServiceAttributes;
    'image-gallery': Components.ImageGalleryAttributes;
    'manifold-marketplace': Components.ManifoldMarketplaceAttributes;
    'mf-button': Components.MfButtonAttributes;
    'mf-icon': Components.MfIconAttributes;
    'product-details': Components.ProductDetailsAttributes;
    'product-page': Components.ProductPageAttributes;
    'product-plans': Components.ProductPlansAttributes;
    'provider-details': Components.ProviderDetailsAttributes;
    'service-card': Components.ServiceCardAttributes;
    'service-grid': Components.ServiceGridAttributes;
  }


  interface HTMLFeaturedServiceElement extends Components.FeaturedService, HTMLStencilElement {}
  var HTMLFeaturedServiceElement: {
    prototype: HTMLFeaturedServiceElement;
    new (): HTMLFeaturedServiceElement;
  };

  interface HTMLImageGalleryElement extends Components.ImageGallery, HTMLStencilElement {}
  var HTMLImageGalleryElement: {
    prototype: HTMLImageGalleryElement;
    new (): HTMLImageGalleryElement;
  };

  interface HTMLManifoldMarketplaceElement extends Components.ManifoldMarketplace, HTMLStencilElement {}
  var HTMLManifoldMarketplaceElement: {
    prototype: HTMLManifoldMarketplaceElement;
    new (): HTMLManifoldMarketplaceElement;
  };

  interface HTMLMfButtonElement extends Components.MfButton, HTMLStencilElement {}
  var HTMLMfButtonElement: {
    prototype: HTMLMfButtonElement;
    new (): HTMLMfButtonElement;
  };

  interface HTMLMfIconElement extends Components.MfIcon, HTMLStencilElement {}
  var HTMLMfIconElement: {
    prototype: HTMLMfIconElement;
    new (): HTMLMfIconElement;
  };

  interface HTMLProductDetailsElement extends Components.ProductDetails, HTMLStencilElement {}
  var HTMLProductDetailsElement: {
    prototype: HTMLProductDetailsElement;
    new (): HTMLProductDetailsElement;
  };

  interface HTMLProductPageElement extends Components.ProductPage, HTMLStencilElement {}
  var HTMLProductPageElement: {
    prototype: HTMLProductPageElement;
    new (): HTMLProductPageElement;
  };

  interface HTMLProductPlansElement extends Components.ProductPlans, HTMLStencilElement {}
  var HTMLProductPlansElement: {
    prototype: HTMLProductPlansElement;
    new (): HTMLProductPlansElement;
  };

  interface HTMLProviderDetailsElement extends Components.ProviderDetails, HTMLStencilElement {}
  var HTMLProviderDetailsElement: {
    prototype: HTMLProviderDetailsElement;
    new (): HTMLProviderDetailsElement;
  };

  interface HTMLServiceCardElement extends Components.ServiceCard, HTMLStencilElement {}
  var HTMLServiceCardElement: {
    prototype: HTMLServiceCardElement;
    new (): HTMLServiceCardElement;
  };

  interface HTMLServiceGridElement extends Components.ServiceGrid, HTMLStencilElement {}
  var HTMLServiceGridElement: {
    prototype: HTMLServiceGridElement;
    new (): HTMLServiceGridElement;
  };

  interface HTMLElementTagNameMap {
    'featured-service': HTMLFeaturedServiceElement
    'image-gallery': HTMLImageGalleryElement
    'manifold-marketplace': HTMLManifoldMarketplaceElement
    'mf-button': HTMLMfButtonElement
    'mf-icon': HTMLMfIconElement
    'product-details': HTMLProductDetailsElement
    'product-page': HTMLProductPageElement
    'product-plans': HTMLProductPlansElement
    'provider-details': HTMLProviderDetailsElement
    'service-card': HTMLServiceCardElement
    'service-grid': HTMLServiceGridElement
  }

  interface ElementTagNameMap {
    'featured-service': HTMLFeaturedServiceElement;
    'image-gallery': HTMLImageGalleryElement;
    'manifold-marketplace': HTMLManifoldMarketplaceElement;
    'mf-button': HTMLMfButtonElement;
    'mf-icon': HTMLMfIconElement;
    'product-details': HTMLProductDetailsElement;
    'product-page': HTMLProductPageElement;
    'product-plans': HTMLProductPlansElement;
    'provider-details': HTMLProviderDetailsElement;
    'service-card': HTMLServiceCardElement;
    'service-grid': HTMLServiceGridElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
