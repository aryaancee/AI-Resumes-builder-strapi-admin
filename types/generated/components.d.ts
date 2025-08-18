import type { Schema, Struct } from '@strapi/strapi';

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'stack';
  };
  attributes: {
    degree: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.Date;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'book';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.Blocks;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'globe';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'skills.skills': SkillsSkills;
    }
  }
}
