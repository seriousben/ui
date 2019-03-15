import { Component, Prop, State } from '@stencil/core';
import { Service } from 'types/Service';
import { Collection } from 'types/Collection';

import Tunnel from '../../data/marketplace';

@Component({ tag: 'manifold-marketplace', styleUrl: 'manifold-marketplace.css' })
export class ManifoldMarketplace {
  @Prop() serviceLink?: string;
  @Prop() featured?: string;
  @Prop() url: string = 'https://api.catalog.manifold.co/v1/';
  @Prop() collections: Collection[] = [];
  @State() services: Service[];

  componentWillLoad() {
    return fetch(`${this.url.replace(/\/$/, '')}/products`)
      .then(response => response.json())
      .then(data => {
        this.services = data;
      });
  }

  render() {
    return (
      <Tunnel.Provider
        state={{
          services: this.services,
          serviceLink: this.serviceLink,
          featured: this.featured,
          collections: this.collections,
        }}
      >
        <service-grid>
          <div slot="collections">
            {this.collections.map(c => (
              <div class="collection-container">
                <marketplace-collection
                  labels={c.labels.join(',')}
                  name={c.name}
                  icon={c.icon}
                  tagLine={c.tagLine}
                />
              </div>
            ))}
          </div>
        </service-grid>
      </Tunnel.Provider>
    );
  }
}
