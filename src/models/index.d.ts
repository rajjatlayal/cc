import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Settings {
  readonly id: string;
  readonly logo?: string;
  readonly social_twitter?: string;
  readonly social_instagram?: string;
  readonly social_discord?: string;
  readonly twitter_link?: string;
  readonly instagram_link?: string;
  readonly discord_link?: string;
  readonly banner1?: string;
  readonly banner2?: string;
  readonly first_title?: string;
  readonly second_title?: string;
  readonly title?: string;
  readonly content?: string;
  readonly img1?: string;
  readonly img2?: string;
  readonly img3?: string;
  readonly img4?: string;
  readonly avatar_title?: string;
  readonly avatar1?: string;
  readonly avatar2?: string;
  readonly avatar3?: string;
  readonly collect_img1?: string;
  readonly collect_img2?: string;
  readonly collect_img3?: string;
  readonly collect_img4?: string;
  readonly collect_content1?: string;
  readonly collect_content2?: string;
  readonly collect_content3?: string;
  readonly collect_content4?: string;
  readonly collect_title1?: string;
  readonly collect_title2?: string;
  readonly collect_title3?: string;
  readonly collect_title4?: string;
  readonly greatest_img1?: string;
  readonly greatest_img2?: string;
  readonly greatest_img3?: string;
  readonly greatest_img4?: string;
  readonly greatest_content?: string;
  readonly greatest_content1?: string;
  readonly greatest_content2?: string;
  readonly greatest_content3?: string;
  readonly roadmap_per1?: string;
  readonly roadmap_per2?: string;
  readonly roadmap_per3?: string;
  readonly roadmap_per4?: string;
  readonly roadmap_per5?: string;
  readonly roadmap_per6?: string;
  readonly roadmap_per7?: string;
  readonly roadmap_per8?: string;
  readonly roadmap_per9?: string;
  readonly roadmap_per10?: string;
  readonly roadmap_content1?: string;
  readonly roadmap_content2?: string;
  readonly roadmap_content3?: string;
  readonly roadmap_content4?: string;
  readonly roadmap_content5?: string;
  readonly roadmap_content6?: string;
  readonly roadmap_content7?: string;
  readonly roadmap_content8?: string;
  readonly roadmap_content9?: string;
  readonly roadmap_content10?: string;
  readonly video_title?: string;
  readonly video_link?: string;
  readonly faq_title1?: string;
  readonly faq_title2?: string;
  readonly faq_title3?: string;
  readonly faq_title4?: string;
  readonly faq_title5?: string;
  readonly faq_title6?: string;
  readonly faq_title7?: string;
  readonly faq_title8?: string;
  readonly faq_content1?: string;
  readonly faq_content2?: string;
  readonly faq_content3?: string;
  readonly faq_content4?: string;
  readonly faq_content5?: string;
  readonly faq_content6?: string;
  readonly faq_content7?: string;
  readonly faq_content8?: string;
  readonly crypto_cunt_img?: string;
  readonly cryptocunt_content?: string;
  readonly ape_img?: string;
  readonly ape_content?: string;
  readonly famous_img?: string;
  readonly famous_content?: string;
  readonly gods_img?: string;
  readonly gods_content?: string;
  readonly evolved_img?: string;
  readonly evolved_content?: string;
  readonly section4_title?: string;
  readonly section4_content?: string;
  readonly section4_img?: string;
  readonly give_content?: string;
  readonly give_img1?: string;
  readonly give_img2?: string;
  readonly give_img3?: string;
  readonly CryptoCunts?: string;
  readonly Evolved?: string;
  readonly AnonymousApe?: string;
  readonly FamousCryptoCunt?: string;
  readonly CryptoCuntGods?: string;
  readonly title_font?: string;
  readonly para_font?: string;
  readonly list_font?: string;
  readonly subtitle_font?: string;
  readonly button_font?: string;
  readonly head_font?: string;
  readonly head_weight?: string;
  readonly title_weight?: string;
  readonly subtitle_weight?: string;
  readonly para_weight?: string;
  readonly list_weight?: string;
  readonly button_weight?: string;
  readonly date_time?: string;
  readonly sec6_heading?: string;
  readonly sec7_heading?: string;
  readonly sec10_heading?: string;
  readonly sec11_heading?: string;
  readonly sec13_heading?: string;
  readonly sec15_heading?: string;
  readonly sec16_heading?: string;
  readonly sec17_heading?: string;
  readonly sec8_heading?: string;
  readonly sec8_content?: string;
  readonly sec9_heading?: string;
  readonly sec9_content?: string;
  readonly text_under10?: string;
  readonly sec12_heading?: string;
  readonly sec12_content?: string;
  readonly sec14_heading?: string;
  readonly sec14_content?: string;
  readonly sec9_img?: string;
  readonly sec12_img?: string;
  readonly sec14_img?: string;
  readonly banner1_link?: string;
  readonly showTimer?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Settings, SettingsMetaData>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}

export declare class Admin {
  readonly id: string;
  readonly username?: string;
  readonly password?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}