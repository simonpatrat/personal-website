import { css } from "styled-components";

// const variables = {};

export const gridStyles = css`
  :root {
    --gutter-width: 1rem;
    --outer-margin: 2rem;
    --gutter-compensation: calc((var(--gutter-width) * 0.5) * -1);
    --half-gutter-width: calc((var(--gutter-width) * 0.5));
    --xs-min: 30;
    --sm-min: 48;
    --md-min: 64;
    --lg-min: 75;
    --screen-xs-min: var(--xs-min) em;
    --screen-sm-min: var(--sm-min) em;
    --screen-md-min: var(--md-min) em;
    --screen-lg-min: var(--lg-min) em;
    --container-sm: calc(var(--sm-min) + var(--gutter-width));
    --container-md: calc(var(--md-min) + var(--gutter-width));
    --container-lg: calc(var(--lg-min) + var(--gutter-width));
  }

  .container-fluid,
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-right: var(--outer-margin, 2rem);
    padding-left: var(--outer-margin, 2rem);
  }

  .container {
    max-width: 1280px;
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
  }

  .row {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: var(--gutter-compensation, -0.5rem);
    margin-left: var(--gutter-compensation, -0.5rem);
  }

  .row.reverse {
    flex-direction: row-reverse;
  }

  .col.reverse {
    flex-direction: column-reverse;
  }

  .col-xs,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-offset-0,
  .col-xs-offset-1,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12 {
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: var(--half-gutter-width, 0.5rem);
    padding-left: var(--half-gutter-width, 0.5rem);
  }

  .col-xs {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-xs-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-xs-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-xs-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-xs-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-xs-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-xs-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-xs-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-xs-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-xs-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-xs-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-xs-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-xs-12 {
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-xs-offset-0 {
    margin-left: 0;
  }

  .col-xs-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-xs-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-xs-offset-3 {
    margin-left: 25%;
  }

  .col-xs-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-xs-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-xs-offset-6 {
    margin-left: 50%;
  }

  .col-xs-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-xs-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-xs-offset-9 {
    margin-left: 75%;
  }

  .col-xs-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-xs-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-xs {
    justify-content: flex-start;
    text-align: start;
  }

  .center-xs {
    justify-content: center;
    text-align: center;
  }

  .end-xs {
    justify-content: flex-end;
    text-align: end;
  }

  .top-xs {
    align-items: flex-start;
  }

  .middle-xs {
    align-items: center;
  }

  .bottom-xs {
    align-items: flex-end;
  }

  .around-xs {
    justify-content: space-around;
  }

  .between-xs {
    justify-content: space-between;
  }

  .first-xs {
    order: -1;
  }

  .last-xs {
    order: 1;
  }

  @media only screen and (min-width: 48em) {
    .container {
      width: var(--container-sm, 46rem);
    }

    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-0,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12 {
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-right: var(--half-gutter-width, 0.5rem);
      padding-left: var(--half-gutter-width, 0.5rem);
    }

    .col-sm {
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-sm-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-sm-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-sm-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-sm-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-sm-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-sm-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-sm-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-sm-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-sm-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-sm-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-sm-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-sm-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-sm-offset-0 {
      margin-left: 0;
    }

    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-sm-offset-3 {
      margin-left: 25%;
    }

    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-sm-offset-6 {
      margin-left: 50%;
    }

    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-sm-offset-9 {
      margin-left: 75%;
    }

    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-sm {
      justify-content: flex-start;
      text-align: start;
    }

    .center-sm {
      justify-content: center;
      text-align: center;
    }

    .end-sm {
      justify-content: flex-end;
      text-align: end;
    }

    .top-sm {
      align-items: flex-start;
    }

    .middle-sm {
      align-items: center;
    }

    .bottom-sm {
      align-items: flex-end;
    }

    .around-sm {
      justify-content: space-around;
    }

    .between-sm {
      justify-content: space-between;
    }

    .first-sm {
      order: -1;
    }

    .last-sm {
      order: 1;
    }
  }

  @media only screen and (min-width: 64em) {
    .container {
      width: var(--container-md, 61rem);
    }

    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-right: var(--half-gutter-width, 0.5rem);
      padding-left: var(--half-gutter-width, 0.5rem);
    }

    .col-md {
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-md-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-md-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-md-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-md-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-md-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-md-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-md-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-md-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-md-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-md-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-md-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-md-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-md-offset-0 {
      margin-left: 0;
    }

    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-md-offset-3 {
      margin-left: 25%;
    }

    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-md-offset-6 {
      margin-left: 50%;
    }

    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-md-offset-9 {
      margin-left: 75%;
    }

    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-md {
      justify-content: flex-start;
      text-align: start;
    }

    .center-md {
      justify-content: center;
      text-align: center;
    }

    .end-md {
      justify-content: flex-end;
      text-align: end;
    }

    .top-md {
      align-items: flex-start;
    }

    .middle-md {
      align-items: center;
    }

    .bottom-md {
      align-items: flex-end;
    }

    .around-md {
      justify-content: space-around;
    }

    .between-md {
      justify-content: space-between;
    }

    .first-md {
      order: -1;
    }

    .last-md {
      order: 1;
    }
  }

  @media only screen and (min-width: 75em) {
    .container {
      width: var(--container-lg, 71rem);
    }

    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-0,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-right: var(--half-gutter-width, 0.5rem);
      padding-left: var(--half-gutter-width, 0.5rem);
    }

    .col-lg {
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-lg-1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-lg-2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-lg-3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-lg-4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-lg-5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-lg-6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-lg-7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-lg-8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-lg-9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-lg-10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-lg-11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-lg-12 {
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-lg-offset-0 {
      margin-left: 0;
    }

    .col-lg-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-lg-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-lg-offset-3 {
      margin-left: 25%;
    }

    .col-lg-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-lg-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-lg-offset-6 {
      margin-left: 50%;
    }

    .col-lg-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-lg-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-lg-offset-9 {
      margin-left: 75%;
    }

    .col-lg-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-lg-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-lg {
      justify-content: flex-start;
      text-align: start;
    }

    .center-lg {
      justify-content: center;
      text-align: center;
    }

    .end-lg {
      justify-content: flex-end;
      text-align: end;
    }

    .top-lg {
      align-items: flex-start;
    }

    .middle-lg {
      align-items: center;
    }

    .bottom-lg {
      align-items: flex-end;
    }

    .around-lg {
      justify-content: space-around;
    }

    .between-lg {
      justify-content: space-between;
    }

    .first-lg {
      order: -1;
    }

    .last-lg {
      order: 1;
    }
  }
`;