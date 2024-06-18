import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** this table willcontain all anouncement */
export type Bunner = {
  __typename?: 'bunner';
  createdOn?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  isActive: Scalars['Boolean'];
  pdf: Scalars['String'];
  updatedOn?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "bunner" */
export type Bunner_Aggregate = {
  __typename?: 'bunner_aggregate';
  aggregate?: Maybe<Bunner_Aggregate_Fields>;
  nodes: Array<Bunner>;
};

/** aggregate fields of "bunner" */
export type Bunner_Aggregate_Fields = {
  __typename?: 'bunner_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bunner_Max_Fields>;
  min?: Maybe<Bunner_Min_Fields>;
};


/** aggregate fields of "bunner" */
export type Bunner_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bunner_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "bunner". All fields are combined with a logical 'AND'. */
export type Bunner_Bool_Exp = {
  _and?: InputMaybe<Array<Bunner_Bool_Exp>>;
  _not?: InputMaybe<Bunner_Bool_Exp>;
  _or?: InputMaybe<Array<Bunner_Bool_Exp>>;
  createdOn?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  pdf?: InputMaybe<String_Comparison_Exp>;
  updatedOn?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bunner" */
export enum Bunner_Constraint {
  /** unique or primary key constraint on columns "id" */
  BunnerPkey = 'bunner_pkey'
}

/** input type for inserting data into table "bunner" */
export type Bunner_Insert_Input = {
  createdOn?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  pdf?: InputMaybe<Scalars['String']>;
  updatedOn?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Bunner_Max_Fields = {
  __typename?: 'bunner_max_fields';
  createdOn?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pdf?: Maybe<Scalars['String']>;
  updatedOn?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Bunner_Min_Fields = {
  __typename?: 'bunner_min_fields';
  createdOn?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pdf?: Maybe<Scalars['String']>;
  updatedOn?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "bunner" */
export type Bunner_Mutation_Response = {
  __typename?: 'bunner_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bunner>;
};

/** on_conflict condition type for table "bunner" */
export type Bunner_On_Conflict = {
  constraint: Bunner_Constraint;
  update_columns?: Array<Bunner_Update_Column>;
  where?: InputMaybe<Bunner_Bool_Exp>;
};

/** Ordering options when selecting data from "bunner". */
export type Bunner_Order_By = {
  createdOn?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  pdf?: InputMaybe<Order_By>;
  updatedOn?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bunner */
export type Bunner_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bunner" */
export enum Bunner_Select_Column {
  /** column name */
  CreatedOn = 'createdOn',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Pdf = 'pdf',
  /** column name */
  UpdatedOn = 'updatedOn'
}

/** input type for updating data in table "bunner" */
export type Bunner_Set_Input = {
  createdOn?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  pdf?: InputMaybe<Scalars['String']>;
  updatedOn?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "bunner" */
export type Bunner_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bunner_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bunner_Stream_Cursor_Value_Input = {
  createdOn?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  pdf?: InputMaybe<Scalars['String']>;
  updatedOn?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "bunner" */
export enum Bunner_Update_Column {
  /** column name */
  CreatedOn = 'createdOn',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Pdf = 'pdf',
  /** column name */
  UpdatedOn = 'updatedOn'
}

export type Bunner_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bunner_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bunner_Bool_Exp;
};

/** this is the table which will contain all courses */
export type Courses = {
  __typename?: 'courses';
  CourseDetails: Scalars['jsonb'];
  CreatedOn: Scalars['timestamptz'];
  UpdatedOn: Scalars['timestamptz'];
  UserId: Scalars['uuid'];
  id: Scalars['uuid'];
  isArchived?: Maybe<Scalars['Boolean']>;
};


/** this is the table which will contain all courses */
export type CoursesCourseDetailsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "courses" */
export type Courses_Aggregate = {
  __typename?: 'courses_aggregate';
  aggregate?: Maybe<Courses_Aggregate_Fields>;
  nodes: Array<Courses>;
};

/** aggregate fields of "courses" */
export type Courses_Aggregate_Fields = {
  __typename?: 'courses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Courses_Max_Fields>;
  min?: Maybe<Courses_Min_Fields>;
};


/** aggregate fields of "courses" */
export type Courses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Courses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Courses_Append_Input = {
  CourseDetails?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "courses". All fields are combined with a logical 'AND'. */
export type Courses_Bool_Exp = {
  CourseDetails?: InputMaybe<Jsonb_Comparison_Exp>;
  CreatedOn?: InputMaybe<Timestamptz_Comparison_Exp>;
  UpdatedOn?: InputMaybe<Timestamptz_Comparison_Exp>;
  UserId?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Courses_Bool_Exp>>;
  _not?: InputMaybe<Courses_Bool_Exp>;
  _or?: InputMaybe<Array<Courses_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isArchived?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "courses" */
export enum Courses_Constraint {
  /** unique or primary key constraint on columns "id" */
  CoursesPkey = 'courses_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Courses_Delete_At_Path_Input = {
  CourseDetails?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Courses_Delete_Elem_Input = {
  CourseDetails?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Courses_Delete_Key_Input = {
  CourseDetails?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "courses" */
export type Courses_Insert_Input = {
  CourseDetails?: InputMaybe<Scalars['jsonb']>;
  CreatedOn?: InputMaybe<Scalars['timestamptz']>;
  UpdatedOn?: InputMaybe<Scalars['timestamptz']>;
  UserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Courses_Max_Fields = {
  __typename?: 'courses_max_fields';
  CreatedOn?: Maybe<Scalars['timestamptz']>;
  UpdatedOn?: Maybe<Scalars['timestamptz']>;
  UserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Courses_Min_Fields = {
  __typename?: 'courses_min_fields';
  CreatedOn?: Maybe<Scalars['timestamptz']>;
  UpdatedOn?: Maybe<Scalars['timestamptz']>;
  UserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "courses" */
export type Courses_Mutation_Response = {
  __typename?: 'courses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Courses>;
};

/** on_conflict condition type for table "courses" */
export type Courses_On_Conflict = {
  constraint: Courses_Constraint;
  update_columns?: Array<Courses_Update_Column>;
  where?: InputMaybe<Courses_Bool_Exp>;
};

/** Ordering options when selecting data from "courses". */
export type Courses_Order_By = {
  CourseDetails?: InputMaybe<Order_By>;
  CreatedOn?: InputMaybe<Order_By>;
  UpdatedOn?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isArchived?: InputMaybe<Order_By>;
};

/** primary key columns input for table: courses */
export type Courses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Courses_Prepend_Input = {
  CourseDetails?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "courses" */
export enum Courses_Select_Column {
  /** column name */
  CourseDetails = 'CourseDetails',
  /** column name */
  CreatedOn = 'CreatedOn',
  /** column name */
  UpdatedOn = 'UpdatedOn',
  /** column name */
  UserId = 'UserId',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'isArchived'
}

/** input type for updating data in table "courses" */
export type Courses_Set_Input = {
  CourseDetails?: InputMaybe<Scalars['jsonb']>;
  CreatedOn?: InputMaybe<Scalars['timestamptz']>;
  UpdatedOn?: InputMaybe<Scalars['timestamptz']>;
  UserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "courses" */
export type Courses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Courses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Courses_Stream_Cursor_Value_Input = {
  CourseDetails?: InputMaybe<Scalars['jsonb']>;
  CreatedOn?: InputMaybe<Scalars['timestamptz']>;
  UpdatedOn?: InputMaybe<Scalars['timestamptz']>;
  UserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "courses" */
export enum Courses_Update_Column {
  /** column name */
  CourseDetails = 'CourseDetails',
  /** column name */
  CreatedOn = 'CreatedOn',
  /** column name */
  UpdatedOn = 'UpdatedOn',
  /** column name */
  UserId = 'UserId',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'isArchived'
}

export type Courses_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Courses_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Courses_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Courses_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Courses_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Courses_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Courses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Courses_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bunner" */
  delete_bunner?: Maybe<Bunner_Mutation_Response>;
  /** delete single row from the table: "bunner" */
  delete_bunner_by_pk?: Maybe<Bunner>;
  /** delete data from the table: "courses" */
  delete_courses?: Maybe<Courses_Mutation_Response>;
  /** delete single row from the table: "courses" */
  delete_courses_by_pk?: Maybe<Courses>;
  /** insert data into the table: "bunner" */
  insert_bunner?: Maybe<Bunner_Mutation_Response>;
  /** insert a single row into the table: "bunner" */
  insert_bunner_one?: Maybe<Bunner>;
  /** insert data into the table: "courses" */
  insert_courses?: Maybe<Courses_Mutation_Response>;
  /** insert a single row into the table: "courses" */
  insert_courses_one?: Maybe<Courses>;
  /** update data of the table: "bunner" */
  update_bunner?: Maybe<Bunner_Mutation_Response>;
  /** update single row of the table: "bunner" */
  update_bunner_by_pk?: Maybe<Bunner>;
  /** update multiples rows of table: "bunner" */
  update_bunner_many?: Maybe<Array<Maybe<Bunner_Mutation_Response>>>;
  /** update data of the table: "courses" */
  update_courses?: Maybe<Courses_Mutation_Response>;
  /** update single row of the table: "courses" */
  update_courses_by_pk?: Maybe<Courses>;
  /** update multiples rows of table: "courses" */
  update_courses_many?: Maybe<Array<Maybe<Courses_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BunnerArgs = {
  where: Bunner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bunner_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CoursesArgs = {
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Courses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_BunnerArgs = {
  objects: Array<Bunner_Insert_Input>;
  on_conflict?: InputMaybe<Bunner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bunner_OneArgs = {
  object: Bunner_Insert_Input;
  on_conflict?: InputMaybe<Bunner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CoursesArgs = {
  objects: Array<Courses_Insert_Input>;
  on_conflict?: InputMaybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_OneArgs = {
  object: Courses_Insert_Input;
  on_conflict?: InputMaybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BunnerArgs = {
  _set?: InputMaybe<Bunner_Set_Input>;
  where: Bunner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bunner_By_PkArgs = {
  _set?: InputMaybe<Bunner_Set_Input>;
  pk_columns: Bunner_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bunner_ManyArgs = {
  updates: Array<Bunner_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CoursesArgs = {
  _append?: InputMaybe<Courses_Append_Input>;
  _delete_at_path?: InputMaybe<Courses_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Courses_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Courses_Delete_Key_Input>;
  _prepend?: InputMaybe<Courses_Prepend_Input>;
  _set?: InputMaybe<Courses_Set_Input>;
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_By_PkArgs = {
  _append?: InputMaybe<Courses_Append_Input>;
  _delete_at_path?: InputMaybe<Courses_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Courses_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Courses_Delete_Key_Input>;
  _prepend?: InputMaybe<Courses_Prepend_Input>;
  _set?: InputMaybe<Courses_Set_Input>;
  pk_columns: Courses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_ManyArgs = {
  updates: Array<Courses_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "bunner" */
  bunner: Array<Bunner>;
  /** fetch aggregated fields from the table: "bunner" */
  bunner_aggregate: Bunner_Aggregate;
  /** fetch data from the table: "bunner" using primary key columns */
  bunner_by_pk?: Maybe<Bunner>;
  /** fetch data from the table: "courses" */
  courses: Array<Courses>;
  /** fetch aggregated fields from the table: "courses" */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
};


export type Query_RootBunnerArgs = {
  distinct_on?: InputMaybe<Array<Bunner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bunner_Order_By>>;
  where?: InputMaybe<Bunner_Bool_Exp>;
};


export type Query_RootBunner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bunner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bunner_Order_By>>;
  where?: InputMaybe<Bunner_Bool_Exp>;
};


export type Query_RootBunner_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCoursesArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "bunner" */
  bunner: Array<Bunner>;
  /** fetch aggregated fields from the table: "bunner" */
  bunner_aggregate: Bunner_Aggregate;
  /** fetch data from the table: "bunner" using primary key columns */
  bunner_by_pk?: Maybe<Bunner>;
  /** fetch data from the table in a streaming manner: "bunner" */
  bunner_stream: Array<Bunner>;
  /** fetch data from the table: "courses" */
  courses: Array<Courses>;
  /** fetch aggregated fields from the table: "courses" */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** fetch data from the table in a streaming manner: "courses" */
  courses_stream: Array<Courses>;
};


export type Subscription_RootBunnerArgs = {
  distinct_on?: InputMaybe<Array<Bunner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bunner_Order_By>>;
  where?: InputMaybe<Bunner_Bool_Exp>;
};


export type Subscription_RootBunner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bunner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bunner_Order_By>>;
  where?: InputMaybe<Bunner_Bool_Exp>;
};


export type Subscription_RootBunner_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBunner_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Bunner_Stream_Cursor_Input>>;
  where?: InputMaybe<Bunner_Bool_Exp>;
};


export type Subscription_RootCoursesArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Courses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Courses_Order_By>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Courses_Stream_Cursor_Input>>;
  where?: InputMaybe<Courses_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ActivateBunnerMutationVariables = Exact<{
  id: Scalars['uuid'];
  status?: InputMaybe<Scalars['Boolean']>;
}>;


export type ActivateBunnerMutation = { __typename?: 'mutation_root', update_bunner?: { __typename?: 'bunner_mutation_response', returning: Array<{ __typename?: 'bunner', createdOn?: any | null, description: string, id: any, isActive: boolean, pdf: string, updatedOn?: any | null }> } | null };

export type AddBunnerMutationVariables = Exact<{
  description?: InputMaybe<Scalars['String']>;
  pdf?: InputMaybe<Scalars['String']>;
}>;


export type AddBunnerMutation = { __typename?: 'mutation_root', insert_bunner?: { __typename?: 'bunner_mutation_response', returning: Array<{ __typename?: 'bunner', pdf: string, description: string, id: any, isActive: boolean, createdOn?: any | null, updatedOn?: any | null }> } | null };

export type GetAllBunnersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBunnersQuery = { __typename?: 'query_root', bunner: Array<{ __typename?: 'bunner', pdf: string, id: any, description: string, isActive: boolean, updatedOn?: any | null, createdOn?: any | null }> };

export type AddCourseMutationVariables = Exact<{
  courseDetails?: InputMaybe<Scalars['jsonb']>;
  userId: Scalars['uuid'];
}>;


export type AddCourseMutation = { __typename?: 'mutation_root', insert_courses_one?: { __typename?: 'courses', id: any, UserId: any, UpdatedOn: any, CreatedOn: any, CourseDetails: any } | null };

export type ArchiveCourseMutationVariables = Exact<{
  id: Scalars['uuid'];
  status?: InputMaybe<Scalars['Boolean']>;
}>;


export type ArchiveCourseMutation = { __typename?: 'mutation_root', update_courses?: { __typename?: 'courses_mutation_response', returning: Array<{ __typename?: 'courses', isArchived?: boolean | null, id: any, UpdatedOn: any, UserId: any }> } | null };

export type GetAllUnArchivedCourseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUnArchivedCourseQuery = { __typename?: 'query_root', courses: Array<{ __typename?: 'courses', id: any, UserId: any, UpdatedOn: any, CreatedOn: any, CourseDetails: any, isArchived?: boolean | null }> };

export type GetAllCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoursesQuery = { __typename?: 'query_root', courses: Array<{ __typename?: 'courses', id: any, UserId: any, UpdatedOn: any, CreatedOn: any, CourseDetails: any, isArchived?: boolean | null }> };

export type GetSingleCoursesQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetSingleCoursesQuery = { __typename?: 'query_root', courses: Array<{ __typename?: 'courses', id: any, UserId: any, UpdatedOn: any, CreatedOn: any, CourseDetails: any }> };


export const ActivateBunnerDocument = gql`
    mutation activateBunner($id: uuid!, $status: Boolean) {
  update_bunner(where: {id: {_eq: $id}}, _set: {isActive: $status}) {
    returning {
      createdOn
      description
      id
      isActive
      pdf
      updatedOn
    }
  }
}
    `;
export const AddBunnerDocument = gql`
    mutation addBunner($description: String, $pdf: String) {
  insert_bunner(objects: {pdf: $pdf, description: $description}) {
    returning {
      pdf
      description
      id
      isActive
      createdOn
      updatedOn
    }
  }
}
    `;
export const GetAllBunnersDocument = gql`
    query getAllBunners {
  bunner {
    pdf
    id
    description
    isActive
    updatedOn
    createdOn
  }
}
    `;
export const AddCourseDocument = gql`
    mutation addCourse($courseDetails: jsonb, $userId: uuid!) {
  insert_courses_one(object: {CourseDetails: $courseDetails, UserId: $userId}) {
    id
    UserId
    UpdatedOn
    CreatedOn
    CourseDetails
  }
}
    `;
export const ArchiveCourseDocument = gql`
    mutation archiveCourse($id: uuid!, $status: Boolean) {
  update_courses(where: {id: {_eq: $id}}, _set: {isArchived: $status}) {
    returning {
      isArchived
      id
      UpdatedOn
      UserId
    }
  }
}
    `;
export const GetAllUnArchivedCourseDocument = gql`
    query getAllUnArchivedCourse {
  courses {
    id
    UserId
    UpdatedOn
    CreatedOn
    CourseDetails
    isArchived
  }
}
    `;
export const GetAllCoursesDocument = gql`
    query getAllCourses {
  courses(where: {isArchived: {_eq: false}}) {
    id
    UserId
    UpdatedOn
    CreatedOn
    CourseDetails
    isArchived
  }
}
    `;
export const GetSingleCoursesDocument = gql`
    query getSingleCourses($id: uuid!) {
  courses(where: {id: {_eq: $id}}) {
    id
    UserId
    UpdatedOn
    CreatedOn
    CourseDetails
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    activateBunner(variables: ActivateBunnerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ActivateBunnerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActivateBunnerMutation>(ActivateBunnerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activateBunner', 'mutation');
    },
    addBunner(variables?: AddBunnerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddBunnerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddBunnerMutation>(AddBunnerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addBunner', 'mutation');
    },
    getAllBunners(variables?: GetAllBunnersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllBunnersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllBunnersQuery>(GetAllBunnersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllBunners', 'query');
    },
    addCourse(variables: AddCourseMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddCourseMutation>(AddCourseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addCourse', 'mutation');
    },
    archiveCourse(variables: ArchiveCourseMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ArchiveCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchiveCourseMutation>(ArchiveCourseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'archiveCourse', 'mutation');
    },
    getAllUnArchivedCourse(variables?: GetAllUnArchivedCourseQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllUnArchivedCourseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllUnArchivedCourseQuery>(GetAllUnArchivedCourseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllUnArchivedCourse', 'query');
    },
    getAllCourses(variables?: GetAllCoursesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCoursesQuery>(GetAllCoursesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllCourses', 'query');
    },
    getSingleCourses(variables: GetSingleCoursesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSingleCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSingleCoursesQuery>(GetSingleCoursesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSingleCourses', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;