import type { HeroeType, JobType, ProfileType, ProjectType } from "@/types";
import type { PostType } from "@/types";

export const getProfile = async (): Promise<ProfileType[]> => {
  return [{
    _id: "1",
    fullName: "J Rosser",
    headline: "AI Researcher // Software Engineer",
    profileImage: {
      image: "/../public/profile_picture.jpg", // replace with your image path
      lqip: "/../public/profile_picture.jpg", // replace with your lqip path
      alt: "Description of Image",
    },
    shortBio: "I'm a passionate web developer with over 5 years of experience.",
    email: "john@example.com",
    fullBio: [], // fill this based on your requirements
    location: "City, Country",
    resumeURL: "path_to_resume.pdf",
    og: "/../public/profile_picture.jpg",
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
        image: "/../public/profile_picture.jpg",
        lqip: "/../public/profile_picture.jpg",
        alt: "Image description",
        },
        tags: ["tag1", "tag2"],
        author: {
        name: "Author Name",
        photo: {
            image: "/../public/profile_picture.jpg",
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
        image: "/../public/profile_picture.jpg",
        lqip: "/../public/profile_picture.jpg",
        alt: "Image description",
        },
        tags: ["tag1", "tag2"],
        author: {
        name: "Author Name",
        photo: {
            image: "/../public/profile_picture.jpg",
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
        image: "/../public/profile_picture.jpg",
        lqip: "/../public/profile_picture.jpg",
        alt: "Image description",
        },
        tags: ["tag2", "tag2"],
        author: {
        name: "Author Name",
        photo: {
            image: "/../public/profile_picture.jpg",
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
    return [
        {
        _id: "job1",
        name: "Artera",
        jobTitle: "Lead Software Engineer",
        logo: "https://media.licdn.com/dms/image/D560BAQET9s3D_-wpHA/company-logo_200_200/0/1695047009925/artera_global_logo?e=1704931200&v=beta&t=cGn_6IWY_zntWMGxIdsSCsvZSU87S07H7p57fy92q34",
        url: "https://companyA.com",
        description: "Lead Software Engineer at Artera.",
        startDate: "2022-09-26",
        endDate: null
      },
      {
        _id: "job1",
        name: "University of Oxford",
        jobTitle: "Master of Engineering",
        logo: "https://seeklogo.com/images/U/University_of_Oxford-logo-2ACBB1AA61-seeklogo.com.png",
        url: "https://companyA.com",
        description: "First Class, 82 on Master's Project, Academic Scholarship awarded.",
        startDate: "2018-09-01",
        endDate: "2022-09-01",
      }
    ]
}


export const getSingleProject = async (slug: string): Promise<ProjectType> => {
    if (slug === "sample-project-slug") {
        return {
            _id: "project1",
            name: "Sample Project",
            slug: "sample-project-slug",
            tagline: "A groundbreaking project.",
            projectUrl: "https://sampleproject.com",
            logo: "/../public/profile_picture.jpg",
            coverImage: {
                image: "/../public/profile_picture.jpg",
                alt: "Sample project cover image",
                lqip: "/../public/profile_picture.jpg"
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
            logo: "/../public/profile_picture.jpg",
            coverImage: {
                image: "/../public/profile_picture.jpg",
                alt: "Sample project cover image",
                lqip: "/../public/profile_picture.jpg"
            },
            description: []
        }]
    
}
