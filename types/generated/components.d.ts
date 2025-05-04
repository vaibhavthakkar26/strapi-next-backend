import type { Schema, Struct } from '@strapi/strapi';

export interface FeatureFeature extends Struct.ComponentSchema {
  collectionName: 'components_feature_features';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'code';
  };
  attributes: {
    Desc: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'feature.feature': FeatureFeature;
    }
  }
}
