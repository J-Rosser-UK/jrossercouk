import type { HeroeType, JobType, ProfileType, ProjectType } from "@/types";
import type { PostType } from "@/types";

export const getProfile = async (): Promise<ProfileType[]> => {
  return [{
    _id: "1",
    fullName: "J Rosser",
    headline: "Web Developer",
    profileImage: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg", // replace with your image path
      lqip: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg", // replace with your lqip path
      alt: "Description of Image",
    },
    shortBio: "I'm a passionate web developer with over 5 years of experience.",
    email: "john@example.com",
    fullBio: [], // fill this based on your requirements
    location: "City, Country",
    resumeURL: "path_to_resume.pdf",
    og: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    usage: [], // fill this based on your requirements
  }];
}



export const getPost = async (): Promise<PostType> => {
    return {
        _id: "post1",
        _createdAt: "2022-01-01",
        title: "Sample Post 1",
        slug: "sample-post-1",
        description: "This is a description for Sample Post 1.",
        coverImage: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        lqip: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        alt: "Image description",
        },
        tags: ["tag1", "tag2"],
        author: {
        name: "Author Name",
        photo: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
            alt: "Author Image description",
        },
        twitterUrl: "https://twitter.com/author",
        },
        body: [],
        featured: true,
        isPublished: true,
    };
}



export const getPosts = async (): Promise<PostType[]> => {
    return [{
        _id: "post1",
        _createdAt: "2022-01-01",
        title: "Sample Post 1",
        slug: "sample-post-1",
        description: "This is a description for Sample Post 1.",
        coverImage: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        lqip: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        alt: "Image description",
        },
        tags: ["tag1", "tag2"],
        author: {
        name: "Author Name",
        photo: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
            alt: "Author Image description",
        },
        twitterUrl: "https://twitter.com/author",
        },
        body: [],
        featured: true,
        isPublished: true,
    },
    {
        _id: "post2",
        _createdAt: "2022-02-02",
        title: "Sample Post 2",
        slug: "sample-post-2",
        description: "This is a description for Sample Post 2.",
        coverImage: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        lqip: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        alt: "Image description",
        },
        tags: ["tag2", "tag2"],
        author: {
        name: "Author Name",
        photo: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
            alt: "Author Image description",
        },
        twitterUrl: "https://twitter.com/author",
        },
        body: [],
        featured: true,
        isPublished: true,
    }];
}


export const getHeroes = async (): Promise<HeroeType[]> => {
    return [{
    _id: "hero 1",
    _createdAt: "2022-01-01",
    name: "Superman",
    url: "superman.com",
    met: true,
  }];
}

export const getJobs = async (): Promise<JobType[]> => {
    return [{
        _id: "job1",
        name: "Company A",
        jobTitle: "Web Developer",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        url: "https://companyA.com",
        description: "Web developer at Company A. Worked on various web applications.",
        startDate: "2020-01-01",
        endDate: "2022-01-01"
      }]
}


export const getSingleProject = async (slug: string): Promise<ProjectType> => {
    if (slug === "sample-project-slug") {
        return {
            _id: "project1",
            name: "Sample Project",
            slug: "sample-project-slug",
            tagline: "A groundbreaking project.",
            projectUrl: "https://sampleproject.com",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
            coverImage: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
                alt: "Sample project cover image",
                lqip: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
            },
            description: []
        }
    } else {
        throw new Error("Project not found");
    }
}



export const getProjects = async (): Promise<ProjectType[]> => {
   
        return [{
            _id: "project1",
            name: "Sample Project",
            slug: "sample-project-slug",
            tagline: "A groundbreaking project.",
            projectUrl: "https://sampleproject.com",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
            coverImage: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
                alt: "Sample project cover image",
                lqip: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
            },
            description: []
        }]
    
}
