import { Component, State, Prop, Element, Watch } from '@stencil/core';

import Tunnel from '../../data/connection';
import { withAuth } from '../../utils/auth';
import { Connection, connections } from '../../utils/connections';

@Component({
  tag: 'manifold-plan-selector',
  shadow: true,
})
export class ManifoldPlanSelector {
  @Element() el: HTMLElement;
  /** _(hidden)_ Passed by `<manifold-connection>` */
  @Prop() connection: Connection = connections.prod;
  /** _(optional)_ Hide CTA? */
  @Prop() hideCta?: boolean;
  /** _(optional)_ Link format structure, with `:product`, `:plan`, and `:features` placeholders */
  @Prop() linkFormat?: string;
  /** Should the JS event still fire, even if link-format is passed?  */
  @Prop() preserveEvent: boolean = false;
  /** URL-friendly slug (e.g. `"jawsdb-mysql"`) */
  @Prop() productLabel: string;
  /** Specify region order */
  @Prop() regions?: string;
  /** _(optional)_ Is this modifying an existing resource? */
  @Prop() resourceId?: string;
  @State() product: Catalog.ExpandedProduct;
  @State() plans: Catalog.Plan[];
  @State() parsedRegions: string[];
  @Watch('regions') regionsChange(newRegions: string) {
    if (newRegions) this.parsedRegions = this.parseRegions(newRegions);
  }

  async componentWillLoad() {
    if (this.regions) this.parsedRegions = this.parseRegions(this.regions);

    const productsRaw = await fetch(
      `${this.connection.catalog}/products/?label=${this.productLabel}`,
      withAuth()
    );
    const products: Catalog.ExpandedProduct[] = await productsRaw.json();
    const [product] = products;
    this.product = product;

    const plansRaw = await fetch(`${this.connection.catalog}/plans/?product_id=${product.id}`);
    const plans: Catalog.ExpandedPlan[] = await plansRaw.json();
    this.plans = [...plans.sort((a, b) => a.body.cost - b.body.cost)];
  }

  parseRegions(regions: string) {
    return regions.split(',').map(region => region.trim().toLowerCase());
  }

  render() {
    if (!this.product || !this.plans) return null;
    return (
      <manifold-active-plan
        hideCta={this.hideCta}
        isExistingResource={!!this.resourceId}
        linkFormat={this.linkFormat}
        plans={this.plans}
        preserveEvent={this.preserveEvent}
        product={this.product}
        regions={this.parsedRegions}
      />
    );
  }
}

Tunnel.injectProps(ManifoldPlanSelector, ['connection']);
