import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
    Upload: any;
    ObjectID: any;
};

export type Query = {
    __typename?: "Query";
    _empty?: Maybe<Scalars["String"]>;
    getAllBooks: Array<Book>;
    getOneBook: Book;
    getAllReviews: Array<Maybe<Review>>;
    getOneReview?: Maybe<Review>;
    getAllChapters: Array<Chapter>;
    getAllChaptersOfBook: Array<Chapter>;
    getOneChapter: Chapter;
};

export type QueryGetOneBookArgs = {
    bookId: Scalars["String"];
};

export type QueryGetOneReviewArgs = {
    reviewId: Scalars["String"];
};

export type QueryGetAllChaptersOfBookArgs = {
    bookId: Scalars["String"];
};

export type QueryGetOneChapterArgs = {
    chapterId: Scalars["String"];
};

export type Mutation = {
    __typename?: "Mutation";
    _empty?: Maybe<Scalars["String"]>;
    signup: Signup;
    sendVerificationCode: User;
    activateAccount: ActivateAccount;
    login: Login;
    createBook: Book;
    updateBook: Book;
    deleteBook: Book;
    createReview: Review;
    updateReview: Review;
    deleteReview: Review;
    createChapter: Chapter;
    updatedChapter: Chapter;
    deleteChapter: Chapter;
    createComment: Comment;
};

export type MutationSignupArgs = {
    user: SignupInput;
};

export type MutationSendVerificationCodeArgs = {
    method: Scalars["String"];
    phoneNumber?: Maybe<Scalars["String"]>;
};

export type MutationActivateAccountArgs = {
    code: Scalars["String"];
};

export type MutationLoginArgs = {
    user: LoginInput;
};

export type MutationCreateBookArgs = {
    book: BookInput;
};

export type MutationUpdateBookArgs = {
    bookId: Scalars["String"];
    book: BookInput;
};

export type MutationDeleteBookArgs = {
    bookId: Scalars["String"];
};

export type MutationCreateReviewArgs = {
    bookId: Scalars["String"];
    review: ReviewInput;
};

export type MutationUpdateReviewArgs = {
    reviewId: Scalars["String"];
    review: ReviewInput;
};

export type MutationDeleteReviewArgs = {
    reviewId: Scalars["String"];
    bookId: Scalars["String"];
};

export type MutationCreateChapterArgs = {
    bookId: Scalars["String"];
    chapter?: Maybe<ChapterInput>;
};

export type MutationUpdatedChapterArgs = {
    chapterId: Scalars["String"];
    chapter: ChapterInput;
};

export type MutationDeleteChapterArgs = {
    chapterId: Scalars["String"];
};

export type MutationCreateCommentArgs = {
    chapterId: Scalars["String"];
    comment: CommentInput;
};

export type Subscription = {
    __typename?: "Subscription";
    _empty?: Maybe<Scalars["String"]>;
};

export type User = {
    __typename?: "User";
    id: Scalars["String"];
    username: Scalars["String"];
    email?: Maybe<Scalars["String"]>;
    active?: Maybe<Scalars["Boolean"]>;
    books?: Maybe<Array<Book>>;
    updatedAt: Scalars["DateTime"];
    createdAt: Scalars["DateTime"];
};

export type SignupInput = {
    username: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
};

export type LoginInput = {
    emailOrUsername: Scalars["String"];
    password: Scalars["String"];
};

export type Signup = {
    __typename?: "Signup";
    token: Scalars["String"];
    username: Scalars["String"];
};

export type ActivateAccount = {
    __typename?: "ActivateAccount";
    username: Scalars["String"];
    active: Scalars["Boolean"];
    token: Scalars["String"];
};

export type Login = {
    __typename?: "Login";
    token: Scalars["String"];
};

export type Book = {
    __typename?: "Book";
    id: Scalars["String"];
    title: Scalars["String"];
    cover: Scalars["String"];
    slug: Scalars["String"];
    description: Scalars["String"];
    author: User;
    reviews: Array<Maybe<Review>>;
    chapters: Array<Maybe<Chapter>>;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
};

export type BookInput = {
    title: Scalars["String"];
    cover?: Maybe<Scalars["Upload"]>;
    description: Scalars["String"];
};

export type Review = {
    __typename?: "Review";
    id: Scalars["String"];
    content: Scalars["String"];
    stars: Scalars["Int"];
    user: User;
    book: Book;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
};

export type ReviewInput = {
    content: Scalars["String"];
    stars: Scalars["Int"];
};

export type Chapter = {
    __typename?: "Chapter";
    id: Scalars["String"];
    name: Scalars["String"];
    content?: Maybe<Scalars["String"]>;
    slug: Scalars["String"];
    book: Book;
    comments: Array<Maybe<Comment>>;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
};

export type ChapterInput = {
    name: Scalars["String"];
    content?: Maybe<Scalars["String"]>;
};

export type Comment = {
    __typename?: "Comment";
    id: Scalars["String"];
    author: User;
    content: Scalars["String"];
    chapter: Chapter;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
};

export type CommentInput = {
    content: Scalars["String"];
};

export type SignupMutationVariables = {
    username: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
};

export type SignupMutation = { __typename?: "Mutation" } & {
    signup: { __typename?: "Signup" } & Pick<Signup, "token" | "username">;
};

export const SignupDocument = gql`
    mutation signup($username: String!, $email: String!, $password: String!) {
        signup(
            user: { username: $username, email: $email, password: $password }
        ) {
            token
            username
        }
    }
`;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<
    SignupMutation,
    SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        SignupMutation,
        SignupMutationVariables
    >
) {
    return ApolloReactHooks.useMutation<
        SignupMutation,
        SignupMutationVariables
    >(SignupDocument, baseOptions);
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<
    SignupMutation
>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<
    SignupMutation,
    SignupMutationVariables
>;
